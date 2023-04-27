import React from 'react';
import NavBar from '../Pages/Shared/Header/NavBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default LoginLayout;