import React, { useState } from "react";
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
  const [userType, setUserType] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          {userType === 'user' && <Route path='/' element={<HomePage />} />}
          {userType === 'systemadmin' && <Route path="/" element={<SystemAdminPage />} />}
          {userType === 'useradmin' && <Route path="/" element={<UsersAdminPage />} />}
        </Route>
        <Route path='/login' element={<LoginPage email={email} setEmail={setEmail} setUserType={setUserType} />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;