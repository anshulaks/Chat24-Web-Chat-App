import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../../context/useSendMessage';

function Typesend() {
  const [message, setMessage]= useState("")
  const { loading, sendMessages } = useSendMessage();
  const handleSubmit = async(e) =>
    {
      e.preventDefault();
      await sendMessages(message)
      setMessage("")//khali krdo chat box
    }
  return (
    <form onSubmit={handleSubmit}>
    <div className='bg-gray-800 h-[8vh] text-center flex items-center justify-between p-2'> 
      <input type="text" placeholder="Type here"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}

        className="grow outline-none px-4 py-2 rounded-lg bg-white border border-gray-300" />
      <button className='text-xl ml-2 flex items-center justify-center p-1 rounded-full hover:bg-gray-700'>
        <IoSend />
      </button>
    </div>
    </form>
  );
}

export default Typesend;
