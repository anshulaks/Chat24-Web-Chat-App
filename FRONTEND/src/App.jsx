import React from 'react'
import cors from "cors";
import Left from "./home/Leftpart/Left.jsx"
import Right from "./home/Rightpart/Right.jsx"
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import { useAuth } from '../context/AuthProvider.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loading from './Components/Loading.jsx';
function App() {
  const [authUser, setAuthUser]=useAuth()
  console.log(authUser)
  return (
    <>
   
    /* <Routes>
      <Route
        path="/"
        element={
          authUser ? (
             <div className="flex h-screen">
               <Left />
               <Right />
                </div>
          ) : (
          //   <div className="drawer lg:drawer-open">
          //     <input
          //       id="my-drawer-2"
          //       type="checkbox"
          //       className="drawer-toggle"
          //     />
          //     <div className="drawer-content flex flex-col items-center justify-center">
          //       <Right />
          //     </div>
          //     <div className="drawer-side">
          //       <label
          //         htmlFor="my-drawer-2"
          //         aria-label="close sidebar"
          //         className="drawer-overlay"
          //       ></label>
          //       <ul className="menu w-80 min-h-full bg-black text-base-content">
          //         <Left />
          //       </ul>
          //     </div>
          //   </div>
          // ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
    </Routes> */
  </>
);
}

export default App;
