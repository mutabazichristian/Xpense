import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Cookie from 'js-cookie'


function ProtectedRoutes(props) {
    const isAuth = Cookie.get('auth') && Cookie.get('auth') !== '' ? true : false && !!localStorage.getItem('userType');
    return (
        isAuth ? <Outlet /> : <Navigate to='/login' replace={true} />
    );
}

export default ProtectedRoutes;