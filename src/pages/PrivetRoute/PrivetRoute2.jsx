import React from 'react';
import UseAuth from '../../components/Hooks/UseAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader';

const PrivetRoute2 = ({children}) => {
    const {user,loader,userFromDb} = UseAuth();
      
       if(loader){
        return  <div className="text-4xl font-mono font-semibold py-40"><Loader/></div>
       }

     if(userFromDb?.find(i=> i.userRole === "Employer" && i.userEmail === user?.email)){
        return children
     }
     return <Navigate to={"/"}></Navigate>
  
};

export default PrivetRoute2;