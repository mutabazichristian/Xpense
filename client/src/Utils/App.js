import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie';
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import ProtectedRoutes from "../Utils/ProtectedRoutes";
import SignUpPage from "../Pages/SignUpPage";
import SystemAdminPage from "../Pages/SystemAdminPage";
import UsersAdminPage from "../Pages/UsersAdminPage";
//state..

function App() {
  const [email, setEmail] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
          <Route path='/systemAdmin' element={<SystemAdminPage />} />
          <Route path='/usersAdmin' element={<UsersAdminPage />} />
        </Route>
        <Route path='/login' element={<LoginPage email={email} setEmail={setEmail} />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;