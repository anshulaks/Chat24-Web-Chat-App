import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../../context/SocketContext';

function Chatuser() {
  const { selectedConversation } =useConversation();
  const { onlineUsers}= useSocketContext();
  if (!selectedConversation) {
    return (
      <div className='h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 flex space-x-3 items-center justify-center'>
        <p className='text-xl text-white'>No conversation selected</p>
      </div>
    );
  }
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  
  return (
    <div className='h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300 flex space-x-3 items-center justify-center'>
      <div className="avatar online">
  <div className="h-12 w-17 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<div >
    <h1 className='text-xl'>{selectedConversation.fullname}</h1>
    <span className='text-sm'>
      {getOnlineUserStatus(selectedConversation._id)}
    </span>
    
</div>
    </div>
  )
}

export default Chatuser
