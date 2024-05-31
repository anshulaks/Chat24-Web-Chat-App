import React, { useEffect, useState } from 'react'
import useConversation from '../src/zustand/useConversation'
import axios from  "axios"
function useGetMessage() {
    const[loading, setLoading]=useState(false)
    const{messages, setMessage,selectedConversation}=useConversation()
    
    useEffect(()=>{
        const getMessages=async() => {
            setLoading(true)
            if(selectedConversation && selectedConversation._id){
                try{
                    const res=await axios.get(
                        `/api/message/get/${selectedConversation._id}`
                    );
                setMessage(res.data);
                setLoading(false);
                }
                catch(err){
                    console.log("Error in getting msgs", err);
                    setLoading(false);
            }
    }}
    getMessages()
},[selectedConversation,setMessage])
    return {loading,messages}
  
}

export default useGetMessage
