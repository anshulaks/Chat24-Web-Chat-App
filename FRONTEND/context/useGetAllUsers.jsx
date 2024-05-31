import React, { useEffect, useState } from 'react'
import Cookies from "js-cookie"
import axios from 'axios'
function useGetAllUsers() {
    const [allUsers, setallUsers]=useState([])
    const [loading, setLoading]=useState(false)
    // const [error, setError] = useState(null); //
     
    useEffect(()=>
        {
            const getUsers= async () => {
            setLoading(true); 
            // setError(null);//
            try{
                const token = Cookies.get("jwt");
                console.log("token:", token)
                const response= await axios.get("/api/user/allUsers",{
                    withCredentials:"include",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setallUsers(response.data);
                 setLoading(false);
            }
            catch(error){
                console.log("ErroR in useGetAllUsers:"+ error)
                
            }
          
            
        };
        getUsers();
        }, [])
        return [allUsers,loading]
}

export default useGetAllUsers
