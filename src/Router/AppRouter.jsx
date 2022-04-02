import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../Page/Home';
import Login from '../Page/Login';
import Register from '../Page/Register';
import Prueba from '../Prueba';
import DashboardRoutes from './DashboardRoutes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/prueba" element={<Prueba />}/>
        <Route path="/*" element={<DashboardRoutes />}/>
      </Routes>
  </BrowserRouter>
  )
}

