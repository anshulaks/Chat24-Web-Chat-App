import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/user.route.js";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./SocketIO/server.js";
dotenv.config()

//middleware
app.use(express.json())
// CORS configuration options


app.use(cookieParser());
app.use(cors());
const PORT = process.env.PORT || 4001

const URI=process.env.MongoDBURI;

//connect mongo
try{
  mongoose.connect(URI, {
    useNewUrlParser : true ,
    useUnifiedTopology:true
  });
  console.log("MongoDB connected successfully")
}catch(error){
  console.log("MongoDB connection error:", error);

}
//app.use('/user', userRoute);
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
console.log(process.env);  // Check all environment variables


// app.post('/user/signup', (req, res) => {
//   res.status(200).json({ message: "Basic Route Working" });
// });