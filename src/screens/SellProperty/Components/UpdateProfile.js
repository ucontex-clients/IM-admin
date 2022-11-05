import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'

export default function UpdateProfile() {
    return (
        <div className=' w-full px-8 py-8 flex flex-col ' >
            <p className=' font-Inter-Bold text-2xl text-center ' >Update Profile</p>
            <div className=' mt-4 font-Inter-Medium py-4 border-t w-full grid grid-cols-3 gap-6 ' > 
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >First Name</p>
                    <Input fontSize="sm" placeholder='First Name' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Last Name</p>
                    <Input fontSize="sm" placeholder='Last Name' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Username</p>
                    <Input fontSize="sm" placeholder='Username' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Gender</p>
                    <Select fontSize="sm" placeholder='Select Gender' height="45px" border=" 1px solid #000 " >
                        <option>Male</option>
                        <option>Female</option>
                    </Select>
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Phone 1 </p>
                    <Input fontSize="sm" placeholder='Phone Number' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Phone 2</p>
                    <Input fontSize="sm" placeholder='Phone Number' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Date of Birth (DD-MM-YY)</p>
                    <Input fontSize="sm" type="date" placeholder='' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Occupation</p>
                    <Input fontSize="sm" placeholder='Occupation' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Country</p>
                    <Input fontSize="sm" placeholder='Nigeria' disabled height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >State</p>
                    <Select fontSize="sm" placeholder='Select Your State' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >City </p>
                    <Input fontSize="sm" placeholder='City' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Address</p>
                    <Input fontSize="sm" placeholder='Address' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Email</p>
                    <Input fontSize="sm" placeholder='Email' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Upload a photograph</p>
                    <Input fontSize="sm" type='file' paddingTop="8px" height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Upload Valid ID</p>
                    <Input fontSize="sm" type='file' paddingTop="8px" height="45px" border=" 1px solid #000 " />
                </div>
            </div>
            <p className=' font-Inter-Bold text-lg text-left ' >Next of Kin</p>
            <div className=' mt-4 font-Inter-Medium py-4 border-t w-full grid grid-cols-3 gap-6 ' > 
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Full Name</p>
                    <Input fontSize="sm" placeholder='Full Name' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Phone Number </p>
                    <Input fontSize="sm" placeholder='Phone Number ' height="45px" border=" 1px solid #000 " />
                </div>
                <div className='w-full' > 
                    <p className=' text-[14px] font-Inter-Medium mb-2 ' >Address</p>
                    <Input fontSize="sm" placeholder='Address' height="45px" border=" 1px solid #000 " />
                </div>
            </div>
            <button className=' w-[400px] mx-auto mt-8 text-white  bg-[#FF1212] h-[45px] rounded-lg font-Montserrat-Bold ' >Create Account</button> 
        </div>
    )
} 