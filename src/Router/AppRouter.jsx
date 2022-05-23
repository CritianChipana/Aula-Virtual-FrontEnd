import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../Page/Login';
import Register from '../Page/Register';
import DashboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/>
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }/>
        {/* <Route path="/register" element={<Register />}/> */}
        <Route path="/*" element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }/>
      </Routes>
  </BrowserRouter>
  )
}

