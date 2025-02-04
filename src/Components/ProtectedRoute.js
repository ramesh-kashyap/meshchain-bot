import React from 'react';
import { Navigate } from 'react-router-dom';

// Assuming you have a function to check if the user is authenticated
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated'); // Or check from Redux/Context API or other state

    // If the user is not authenticated, redirect to login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
