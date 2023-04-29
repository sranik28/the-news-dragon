import React from 'react';
import { useDataGlobally } from '../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useDataGlobally();

    const location = useLocation();

    if (loading) {
        return <Spinner className='text-center ' animation="border" role="status"></Spinner>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate state={{ from: location }} to="/login" replace />
    }


};

export default PrivateRoute;