import React, { createContext, useCallback, useContext, useState } from "react";
// import { ChatContext } from "../context/chat/ChatContext";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null,
};

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialState);

    // const { dispatch } = useContext(ChatContext);

    const login = async (correo, password) => {
        const resp = await fetchSinToken(
            "auth/login",
            { correo, password },
            "POST"
        );

        if (resp.success) {
            localStorage.setItem("token", resp.token);
            const { usuario } = resp;
            console.log("login ok");
            setAuth({
                uid: usuario?.uid,
                checking: false,
                logged: true,
                name: usuario?.nombre,
                email: usuario?.correo,
            });

            console.log("AUTENTICADO");

            return resp;
        } else {
            return resp;
        }
    };

    const register = async (data) => {
        const resp = await fetchSinToken("usuarios", data, "POST");
        console.log("asssssssssssssssss")
        console.log(resp);

        if (resp.success) {
            localStorage.setItem("token", resp.token);
            const { usuario } = resp;
            setAuth({
                uid: usuario?.uid,
                checking: false,
                logged: true,
                name: usuario.nombre,
                email: usuario.email,
            });

            console.log("AUTENTICADO");
            return resp;
        }
        return resp;
    };

    const verificaToken = useCallback(async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });

            return false;
        }

        const resp = await fetchConToken("login");

        if (resp.ok) {
            localStorage.setItem("token", resp.token);
            const { usuario } = resp;
            setAuth({
                uid: usuario?.uid,
                checking: false,
                logged: true,
                name: usuario?.nombre,
                email: usuario?.email,
            });

            console.log("AUTENTICADO");
            return true;
        } else {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });
            return false;
        }
    }, []);

    const logout = () => {
        // localStorage.removeItem("token");
        // dispatch({
        //     type: types.cerrarSession,
        // });
        // setAuth({
        //     checking: false,
        //     logged: false,
        // });
    };

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                login,
                register,
                verificaToken,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
