import React, { useState } from 'react'
import Mail from "../../../assests/images/icons/mail.png"
import Lock from "../../../assests/images/icons/lock.png"
import Eye from "../../../assests/images/icons/eye.png"
import Buyer from "../../../assests/images/icons/buyer.png"
import User from "../../../assests/images/icons/user.png"
import Referrer from "../../../assests/images/icons/referrer.png"
import { Checkbox, Input } from '@chakra-ui/react'

export default function Register() {

    const [showpassword, setShowPassword] = useState(false)

    return (
        <> 
            <p className=' font-Montserrat-Medium mt-8' >Create an account to get started</p>
            <div className=' mt-6 relative h-[45px] ' > 
                <Input paddingLeft="40px" border="1px solid #C6C5C5" height="45px" placeholder='Buyer' />
                <img src={Buyer} alt="Buyer" className=' w-5 absolute top-[13px] left-3 ' />
            </div>
            <div className=' mt-4 relative h-[45px] ' > 
                <Input paddingLeft="40px" border="1px solid #C6C5C5" height="45px" placeholder='E-mail Address /phone' />
                <img src={Mail} alt="mail" className=' w-5 absolute top-[13px] left-3 ' />
            </div>
            <div className=' mt-4 relative h-[45px] ' > 
                <Input paddingLeft="40px" border="1px solid #C6C5C5" height="45px" placeholder='Username' />
                <img src={User} alt="User" className=' w-5 absolute top-[13px] left-3 ' />
            </div> 
            <div className=' mt-4 relative h-[45px] ' > 
                <Input type={showpassword ? "text":"password"} paddingLeft="40px" paddingRight="40px" border="1px solid #C6C5C5" height="45px" placeholder='Password' />
                <img src={Lock} alt="Lock" className=' w-5 absolute top-[11px] left-3 ' />
                <img src={Eye} alt="maiEyel" onClick={()=> setShowPassword((prev)=> !prev)} className=' w-6 absolute top-[13px] right-3 cursor-pointer ' />
            </div>
            <div className=' mt-4 relative h-[45px] ' > 
                <Input paddingLeft="40px" border="1px solid #C6C5C5" height="45px" placeholder='Referrer’s (Optional)' />
                <img src={Referrer} alt="Referrer" className=' w-5 absolute top-[13px] left-3 ' />
            </div>
            <div className=' flex items-center mt-4 mb-2 ' >
                <Checkbox />
                <p className=' ml-2 font-Montserrat-Regular text-xs ' >I agree to IM Properties Terms & Condition and Privacy Policy</p>
            </div>
            <button className=' w-[400px] mx-auto mt-8 text-white  bg-[#FF1212] h-[45px] rounded-lg font-Montserrat-Bold ' >Create Account</button> 
        </>
    )
} 