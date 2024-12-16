import React from 'react';
import UseAuth from '../../components/Hooks/UseAuth';
import { Navigate } from 'react-router-dom';

const PrivetRoute1 = ({children}) => {
    const {user,loader,userFromDb} = UseAuth();
    if(loader){
      return <div className="text-4xl font-mono font-semibold py-40"><Loader/></div>
    }
    if(userFromDb?.find(i=> i.userRole === "Candidate" && i.userEmail === user?.email)){
       return children

    }
    return <Navigate to={"/login"}></Navigate>

};

export default PrivetRoute1;