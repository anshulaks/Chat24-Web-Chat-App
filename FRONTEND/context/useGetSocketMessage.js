import React, {useEffect} from 'react'
import { useSocketContext } from './SocketContext'
import useConversation from '../src/zustand/useConversation';
import sound from "../src/assets/notification.mp3"
const useGetSocketMessage = () => {
    const { socket } = useSocketContext();
    const { messages, setMessage } = useConversation();
  
    useEffect(() => {
      if (!socket) {
        console.error("Socket not initialized");
        return;
    }

      socket.on("newMessage", (newMessage) => {
        const notification = new Audio(sound);
         notification.play();
        setMessage([...messages, newMessage]);
      });
      return () => {
        socket.off("newMessage");
      };
    }, [socket, messages, setMessage]);
  };
  export default useGetSocketMessage;
