import React, { useContext } from 'react';
import { AuthContext } from '../../context-provider/AuthProvider';

const UseAuth = () => {
      const authContext = useContext(AuthContext)
    return authContext
};

export default UseAuth;