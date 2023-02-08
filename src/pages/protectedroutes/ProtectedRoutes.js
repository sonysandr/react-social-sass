import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ifUser}) => {
    
    if(!ifUser){
        return <Navigate to="/login" />
    }
    return <Outlet/>
   
}

export default ProtectedRoutes