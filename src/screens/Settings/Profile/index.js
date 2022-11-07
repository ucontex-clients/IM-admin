import React from 'react'

export default function Index() {
    return (
        <div className=' w-full py-12 px-16 font-Inter-Medium ' >
            <p style={{ color: "#0984D6"}} className=" font-Inter-Bold " >Update Admin Profile</p>
            <div style={{ width: "500px"}} className="mt-10 flex flex-col" > 
                <p  style={{ color: "#000"}} className="" >Full Name</p>
                <input style={{ color: "#000"}} className=' w-full h-12 border px-6 mt-2 border-[#D4D4D4] rounded-md ' placeholder='Enter the email ' />
                <p  style={{ color: "#000"}} className="mt-5" >Upload Photo</p>
                <input style={{ color: "#000"}} className=' w-full h-12 border px-6 mt-2 border-[#D4D4D4] rounded-md py-2 ' type="file" />
                <button  style={{ color: "#fff"}}  className=' w-64 font-Inter-Bold rounded-md bg-[#0984D6] text-white mt-8 mx-auto h-12 ' >Update Profile</button>
            </div>
        </div>
    )
} 