import React from 'react'
import Navbar from '../Navbar'
import SideBar from '../SideBar'

function Layout({ children }) {
  return (
    <div className=" w-full flex flex-1 ">
      <div className=" fixed top-0 inset-x-0 z-20 bg-white ">
        <Navbar />
      </div>
      <SideBar />
      <div className=" w-full h-screen flex flex-1 pt-[60px] overflow-y-auto overflow-x-hidden ">
        {children}
      </div>
    </div>
  )
}

export default Layout
