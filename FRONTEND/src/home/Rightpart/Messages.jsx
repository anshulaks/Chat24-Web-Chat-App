import React, { useEffect, useRef } from 'react'
import Message from "./Message.jsx"
import axios from "axios"
import useGetMessage from '../../../context/useGetMessage.js'
import Loading from '../../Components/Loading.jsx'
import useGetSocketMessage from '../../../context/useGetSocketMessage.js'

function Messages() {

  const {loading, messages}=useGetMessage();
  useGetSocketMessage() //listen incoming messages
  console.log(messages);

  const lastMsgRef = useRef()
  useEffect(() => {
    setTimeout(()=> {
      if(lastMsgRef.current){
    lastMsgRef.current.scrollIntoView({
       behavior: "smooth",
       });

      }
    },100)
  },[messages])
  return (
    <div className='flex-1 overflow-y-auto'
     style={{ minHeight:"calc(92vh - 8vh)" }}>
      {loading?(
      <Loading/>
          ) : (
      messages.length >0 &&
       messages.map((message)=>(
       <div key={message.id} ref={lastMsgRef}>

       <Message message={message}></Message>
        </div>
      )))}



     {!loading && messages.length===0 && (
      <div>
        <p className='text-center mt-'>
          Say! Hi to start the conversation.
          </p>
        </div>
     )}
      </div>
  );
}

export default Messages;

