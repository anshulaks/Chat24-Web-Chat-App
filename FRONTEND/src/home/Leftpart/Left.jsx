import React from 'react'
import Search from "./Search"
import Users from './Users'
import Logout from './Logout'
function Left() {
  return (
    <div className='w-[30%] text-gray-300 bg-black'>
      <Search></Search>
      <div
       className='flex-1 overflow-y-auto'
        style={ {minHeight:"calc(84vh - 10vh)"}}>
          <Users></Users>
        </div>
      <Logout></Logout>
    </div>
  )
}

export default Left
