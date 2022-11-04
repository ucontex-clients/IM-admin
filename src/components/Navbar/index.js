import React from 'react'
import Logo from '../../assests/images/im.png'

export default function Index() {
    return (
        <div className=' w-full h-[60px] px-4 shadow-lg flex items-center justify-between ' >
            <img src={Logo} alt="logo" />
            <div className=' border-l border-[#000] h-8 pl-4 flex items-center ' >
                <div className=' w-8 h-8 rounded-full bg-green-500 mr-6 ' >

                </div>
                <p className=' font-Inter-Medium mr-6 ' >Esther</p>
                <p className=' font-Inter-Medium  ' >Log out</p>
            </div> 
        </div>
    )
} 