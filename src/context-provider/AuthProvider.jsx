
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase-init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useQuery } from '@tanstack/react-query';




export const AuthContext = createContext(null);
// 
const AuthProvider = ({children}) => {
// 
const [user, setUser] = useState(null);
const [loader,setLoader] =useState(true);
const [userFromDb , setUserFromDb] = useState([]);
console.log(user)

//register user by email pass
const registerUserByEmailPass = (userInfo)=>{
     return createUserWithEmailAndPassword(auth, userInfo?.userEmail, userInfo?.userPass)
}

// login user by email pass
const loginUserByEmailPass = (userInfo)=>{
    return signInWithEmailAndPassword(auth , userInfo?.userEmail, userInfo?.userPass)
}


 //
 const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      //
      const res = await fetch("https://job-portal-server-zeta.vercel.app/users");
      return res.json();
    },
  });
//   
useEffect(()=>{
    setUserFromDb(data)
    // 
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
           if(currentUser){
              setUser(currentUser);
              setLoader(false)
           }else{
            setUser('');
            setLoader(false)
           }
      })

      return () =>{
        unsubscribe();
      }
},[data,user])



//
const authInfo = {
    registerUserByEmailPass,
    loginUserByEmailPass,
    setUser,
    user,
    loader,
    setLoader,
    userFromDb

    
}

// 
    return (
        
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
       
    );
};

export default AuthProvider;