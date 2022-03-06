import React from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../Page/Login';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
      </Routes>
  </BrowserRouter>
  )
}

