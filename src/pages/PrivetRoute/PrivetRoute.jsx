import React from 'react';
import UseAuth from '../../components/Hooks/UseAuth';
import { Navigate } from 'react-router-dom';
import Loader from '../../components/Loader';

const PrivetRoute = ({children}) => {
     const {user,loader} = UseAuth();
     if(loader){
       return <div className="text-4xl font-mono font-semibold py-40"><Loader/></div>
     }
     if(user){
        return children

     }
     return <Navigate to={"/login"}></Navigate>

   
};

export default PrivetRoute;