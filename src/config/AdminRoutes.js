import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authenticationHelper';

const AdminRoutes = ({ children }) => {
    const authed = isAuthenticated() && isAuthenticated().role === 'admin' // isauth() returns true or false based on localStorage
    return authed ? children : <Navigate to="/home" />;
}

export default AdminRoutes