import { RiLogoutCircleLine } from "react-icons/ri";
import React, { useState } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);

    try {
      await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      alert("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in logout", error);
    }

    setLoading(false);
  }

  return (
    <div className="h-[10vh]">
      <div>
        <RiLogoutCircleLine 
          className="px-2 py-2 ml-2 mt-1 text-5xl text-white-500 hover:bg-slate-600 duration-299 rounded-full cursor-pointer"
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Logout;
