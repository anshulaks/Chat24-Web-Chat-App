import { createContext, useState, useEffect, useContext } from "react";
import { useAuth} from "./AuthProvider"
import io from "socket.io-client"
const socketContext= createContext();
//hook
export const useSocketContext= () => {
    return useContext(socketContext)
}
export const SocketProvider=({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setonlineUsers]= useState([]);
    const [authUser]=useAuth();

    useEffect(()=>{
    if(authUser){
        const socket=io("http://localhost:4000",{
        query:{
            userId: authUser.user._id,
        },
    });
    setSocket(socket);
    socket.on("getOnlineUsers",(users)=>{
        setonlineUsers(users);
    })    
    return ()=>socket.close();
 } else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
}
,[authUser]);

return(
    <socketContext.Provider value={{socket,onlineUsers}}>
        {children}
    </socketContext.Provider>
)}

  