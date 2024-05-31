import React, { useEffect } from 'react'//
import Chatuser from './Chatuser'
import Messages from './Messages.jsx'
import Typesend from './Typesend.jsx'
import { useAuth } from '../../../context/AuthProvider.jsx'
import useConversation from '../../zustand/useConversation.js'
function Right() {
  const { selectedConversation, setSelectedConversation }= useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null)
  },[setSelectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
      {!setSelectedConversation?(
      <NoChatSelected></NoChatSelected>
      ):(
      <>
        <Chatuser></Chatuser>
        <div
        className='flex-1 overflow-y-auto'
        style={{ maxHeight:"calc(92vh - 8vh)" }}>
        <Messages></Messages>
        </div>
        <Typesend></Typesend>
      
      </>)}
      
    </div>
    </div>
  )
}

export default Right;

const NoChatSelected = () => {
    const [authUser]=useAuth()
    return (
      <>
      <div className='justify-center flex h-screen items-center'>
        <h1 className='text-center'>
          Welcome <span className='font-semibold text-xl'>{authUser.user.fullname}</span>
          <br />
          No chat selected, Please select a friend to chat!
        </h1>
      </div>
      </>
    )
  }
