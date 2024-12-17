import axios from 'axios';
import { useEffect } from 'react';
import UseAuth from './UseAuth';
import { useNavigate } from 'react-router-dom';



const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-zeta.vercel.app',
     withCredentials:true,
  });
// 

const UseAxiosSecure = () => {
    //   
    const { signOutUser} = UseAuth();
    const navigate= useNavigate();
    // 
    useEffect(()=>{
          axiosInstance.interceptors.response.use(response =>{
            return response
          }, error=>{
            console.log("error cought in interceptors")
               if(error.status===401 || error.status===403){
                console.log("you will be log out soon");
                signOutUser()
                .then(()=>{
                    console.log("logOut user")
                    navigate("/login")
                })
                .catch(err=>console.log(err))
               }
              return Promise.reject(error)
          })
         

    },[])



    return axiosInstance
};

export default UseAxiosSecure;