import React from "react";
import { AppRouter } from "./Router/AppRouter";

import "./App.css";
import { theme } from "./styles/themes";
import { ThemeProvider } from "@material-ui/core";
import { AuthProvider } from "./auth/AuthContext";

export const App = () => {
  return (
    <div className="app">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
};
