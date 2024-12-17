import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const AuthContext = createContext(null);
//
const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const [userFromDb, setUserFromDb] = useState([]);

  //register user by email pass
  const registerUserByEmailPass = (userInfo) => {
    return createUserWithEmailAndPassword(
      auth,
      userInfo?.userEmail,
      userInfo?.userPass
    );
  };

  // login user by email pass
  const loginUserByEmailPass = (userInfo) => {
    return signInWithEmailAndPassword(
      auth,
      userInfo?.userEmail,
      userInfo?.userPass
    );
  };
  // sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  //
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      //
      const res = await fetch(
        "https://job-portal-server-zeta.vercel.app/users"
      );
      return res.json();
    },
  });
  //
  useEffect(() => {
    setUserFromDb(data);
    //
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // sent user data to jwt
        const user = { email: currentUser?.email };
        axios.post("https://job-portal-server-zeta.vercel.app/jwt", user,{
          withCredentials:true,
        })
        .then((res) => {
          console.log(res.data);
          setLoader(false);
        });

        //
        setUser(currentUser);
       
      } else {
        // when users logout
        axios.post('https://job-portal-server-zeta.vercel.app/logOut',{},{
          withCredentials:true,
        })
        .then(res=>{
          console.log("loguot",res.data)
          setLoader(false);
        }).catch(err=>{
          console.log(err)
        })
        // 
        setUser("");
        setLoader(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [data, user]);

  //
  const authInfo = {
    registerUserByEmailPass,
    loginUserByEmailPass,
    setUser,
    user,
    loader,
    setLoader,
    userFromDb,
    signOutUser,
  };

  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
