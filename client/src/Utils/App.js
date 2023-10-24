import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie';
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import ProtectedRoutes from "../Utils/ProtectedRoutes";
//state..

function App() {
  const [email, setEmail] = useState('');
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path='/login' element={<LoginPage email={email} setEmail={setEmail} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;