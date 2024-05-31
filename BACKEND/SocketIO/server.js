import { Server } from "socket.io";
import http from "http";
import express from "express"

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin:"http://localhost:3002",
        methods:["GET","POST"],
}
})
//realtime msg code goes here
export const getRecieverSocketId= (receiverId) => {
    return users[receiverId];
};



const users = {}
//used to listen events on server side.
io.on("connection",(socket)=>{
    console.log("a user connected",socket.id);

    const userId=socket.handshake.query.userId;
    if(userId){
        users[userId]=socket.id
        console.log("hello", users)
    }
    //usin to send events to all connected users
    io.emit("getOnlineUsers", Object.keys(users));


//used to list client side events emmited by server side
socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id)
    delete users[userId]
    io.emit("getOnlineUsers", Object.keys(users));

})

})

export {app,io,server}