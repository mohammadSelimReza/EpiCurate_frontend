import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { jwtDecode } from "jwt-decode";
import api from "../api";



const ProtectedRoutes = ({children}) => {
    const [isAuthorized,setAuthorized] = useState(null);

    useEffect(()=>{
        auth().catch(()=>setAuthorized(false))
    },[])

    const refreshToken = async() =>{
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try{
            const res = await api.post("/api/token/refresh/",{
                refresh: refreshToken,
            });
            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN,res.data.access)
                setAuthorized(true)
            }
            else{
                localStorage.removeItem(ACCESS_TOKEN)
                localStorage.removeItem(REFRESH_TOKEN)
                setAuthorized(false)
            }
        }
        catch(error){
            console.log(error);
            setAuthorized(false);
        }
    }
    const auth = async() =>{
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(!token){
            setAuthorized(false);
            return;
        }
        const decode = jwtDecode(token);
        const tokenExpiration = decode.exp;
        const now = Date.now() / 1000;

        if(tokenExpiration < now){
            await refreshToken()
        }
        else{
            setAuthorized(true);
        }
    }

    if(isAuthorized === null){
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" />
};

export default ProtectedRoutes;