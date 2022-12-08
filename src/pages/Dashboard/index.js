import React from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'

export default function Index() {
    return (
        <div className=' w-full h-screen flex flex-1 pt-[60px] overflow-y-hidden ' >
            <div className=" fixed top-0 inset-x-0 z-20 bg-white " >
                <Navbar />
            </div>
            {/* <div className=' w-full flex flex-1 overflow-y-hidden ' > */}
            <SideBar />
            <div className=' flex flex-1 w-full pt-[90px] overflow-y-auto py-10 px-12 ' >
                <Outlet />
            </div>
            {/* </div> */}
        </div>
    )
}