import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({ children }) => {
    let storageData = JSON.parse(localStorage.getItem("loggedInUser"))
    let location = useLocation()
    if (storageData === null) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return (<>
        {children}
    </>
    )
}


export default PrivateRoutes