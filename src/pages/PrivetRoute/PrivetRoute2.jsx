import React from 'react';
import UseAuth from '../../components/Hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute2 = ({children}) => {
    const {user,loader,userFromDb} = UseAuth();
      
       if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
       }

     if(userFromDb?.find(i=> i.userRole === "Employer" && i.userEmail === user?.email)){
        return children
     }
     return <Navigate to={"/"}></Navigate>
  
};

export default PrivetRoute2;