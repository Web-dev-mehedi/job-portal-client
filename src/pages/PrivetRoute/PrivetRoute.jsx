import React from 'react';
import UseAuth from '../../components/Hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
     const {user,loader} = UseAuth();
     if(loader){
       return <span className="loading loading-spinner loading-lg"></span>
     }
     if(user){
        return children

     }
     return <Navigate to={"/login"}></Navigate>

   
};

export default PrivetRoute;