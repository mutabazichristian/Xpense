import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import ProtectedRoutes from "../Utils/ProtectedRoutes";
import SignUpPage from "../Pages/SignUpPage";
import SystemAdminPage from "../Pages/SystemAdminPage";
import UsersAdminPage from "../Pages/UsersAdminPage";
import Create from "../Pages/Create";
//state..

function App() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  useEffect(() => {
    if (!!localStorage.getItem('userType')) {
      setUserType(localStorage.getItem('userType'));
      console.log('usertype', userType)
    }
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          {userType === 'user' && <Route path='*' element={<HomePage />} />}
          {userType === 'systemadmin' && <Route path="*" element={<SystemAdminPage />} />}
          {userType === 'useradmin' && <Route path="*" element={<UsersAdminPage />} />}
        </Route>
        {userType === '' && <>
          <Route path='/login' element={<LoginPage email={email} setEmail={setEmail} setUserType={setUserType} />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='*' element={<LoginPage email={email} setEmail={setEmail} setUserType={setUserType} />} />
          <Route path='/create' element={<Create />} />
        </>
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;