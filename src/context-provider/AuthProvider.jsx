
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase-init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';




export const AuthContext = createContext(null);
// 
const AuthProvider = ({children}) => {
// 
const [user, setUser] = useState(null);
const [loader,setLoader] =useState(true);
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

useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
           if(currentUser){
              setUser(currentUser);
              setLoader(false)
           }else{
            setUser('');
            setLoader(true)
           }
      })

      return () =>{
        unsubscribe();
      }
},[])



//
const authInfo = {
    registerUserByEmailPass,
    loginUserByEmailPass,
    setUser,
    user,
    loader,
    setLoader

    
}

// 
    return (
        
         <AuthContext.Provider value={authInfo}>
            {children}
         </AuthContext.Provider>
       
    );
};

export default AuthProvider;