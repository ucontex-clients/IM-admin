import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import { MenuItem, TextField } from '@mui/material'

export default function UpdateProfile() {
  return (
    <div className=" w-full px-8 py-8 flex flex-col ">
      <p className=" font-Inter-Bold text-2xl text-center ">Update Profile</p>
      <div className=" mt-4 font-Inter-Medium py-4 border-t w-full grid grid-cols-3 gap-6 ">
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">First Name</p>
          <TextField fullWidth fontSize="sm" placeholder="First Name" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Last Name</p>
          <TextField
            fullWidth
            fontSize="sm"
            placeholder="Last Name"
            height="45px"
            border=" 1px solid #000 "
          />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Username</p>
          <TextField fullWidth fontSize="sm" placeholder="Username" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Gender</p>
          <TextField fullWidth select fontSize="sm" placeholder="Select Gender">
            <MenuItem>Male</MenuItem>
            <MenuItem>Female</MenuItem>
          </TextField>
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Phone 1 </p>
          <TextField fullWidth fontSize="sm" placeholder="Phone Number" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Phone 2</p>
          <TextField fullWidth fontSize="sm" placeholder="Phone Number" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">
            Date of Birth (DD-MM-YY)
          </p>
          <TextField fullWidth fontSize="sm" type="date" placeholder="" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Occupation</p>
          <TextField fullWidth fontSize="sm" placeholder="Occupation" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Country</p>
          <TextField fullWidth fontSize="sm" placeholder="Nigeria" disabled />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">State</p>
          <TextField
            fullWidth
            select
            fontSize="sm"
            placeholder="Select Your State"
          >
            <MenuItem>Rivers</MenuItem>
          </TextField>
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">City </p>
          <TextField fullWidth fontSize="sm" placeholder="City" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Address</p>
          <TextField fullWidth fontSize="sm" placeholder="Address" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Email</p>
          <TextField fullWidth fontSize="sm" placeholder="Email" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">
            Upload a photograph
          </p>
          <TextField fullWidth fontSize="sm" type="file" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">
            Upload Valid ID
          </p>
          <TextField fullWidth fontSize="sm" type="file" />
        </div>
      </div>
      <p className=" font-Inter-Bold text-lg text-left ">Next of Kin</p>
      <div className=" mt-4 font-Inter-Medium py-4 border-t w-full grid grid-cols-3 gap-6 ">
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Full Name</p>
          <TextField fullWidth fontSize="sm" placeholder="Full Name" />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Phone Number </p>
          <TextField fullWidth fontSize="sm" placeholder="Phone Number " />
        </div>
        <div className="w-full">
          <p className=" text-[14px] font-Inter-Medium mb-2 ">Address</p>
          <TextField fullWidth fontSize="sm" placeholder="Address" />
        </div>
      </div>
      <button className=" w-[400px] mx-auto mt-8 text-white  bg-[#FF1212] h-[45px] rounded-lg font-Montserrat-Bold ">
        Create Account
      </button>
    </div>
  )
}
