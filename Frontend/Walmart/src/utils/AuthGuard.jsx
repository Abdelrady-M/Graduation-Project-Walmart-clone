// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";

// const AuthGuard = ({ children }) => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         const isAuthenticated = Cookies.get('userToken'); // Check if the user has the token in cookies
//         if (isAuthenticated) {
//             navigate('/'); // Redirect to the login page if not authenticated
//         }
//     }, [navigate]);

//     return children; // Render the children components if authenticated
// };

// export default AuthGuard;


import { Route, Link } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
    // Get authentication status from your authentication state or context
    const isAuthenticated = true; // Assuming true for demonstration

    return (
        <Route {...rest}>
            {isAuthenticated ? (
                // User is authenticated, render the children components
                children
            ) : (
                // User is not authenticated, redirect to the login page
                <Link to="/login" />
            )}
        </Route>
    );
};


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./isAuthenticated";

export const AuthGuard = ({ element: Element }) => {
    const navigate = useNavigate();
    const isAuthenticatedRole = isAuthenticated();
    useEffect(() => {
        if (isAuthenticatedRole) {
            navigate('/');
        }
    }, [isAuthenticatedRole, navigate]);
    if (!isAuthenticatedRole) {
        return <Element />;
    }
    return null;
};

// export default AuthGuard;



