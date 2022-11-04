import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import Add from '../../../assests/images/icons/addp.png'

export default function PropertyDetails(props) {
    return (
        <div className=' w-[600px] overflow-y-auto flex flex-col font-Montserrat-Medium mt-4 p-6 pb-12 border rounded-lg ' > 
            <p className=' my-6 font-Montserrat-Bold  ' >About Property Info</p>
            <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Name of Property</p>
            <Input placeholder='Property Name' height="45px" border=" 1px solid #000 " />
            <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Description</p>
            <Textarea placeholder='Write something about the property' height="150px" border=" 1px solid #000 " />
            <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Name of Property</p>
            <div className=' flex  ' >
                <div className=' w-full mr-4 ' > 
                    <Select placeholder='Country' height="45px" border=" 1px solid #000 " />
                </div>
                <div className=' w-full mr-4 ' > 
                    <Select placeholder='State' height="45px" border=" 1px solid #000 " />
                </div>
                <div className=' w-full ' > 
                    <Select placeholder='LGA' height="45px" border=" 1px solid #000 " />
                </div>
            </div><p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Name of Property</p>
            <div className=' flex  ' >
                <div className=' w-full mr-4 ' > 
                    <Input placeholder='City' height="45px" border=" 1px solid #000 " />
                </div>
                <div className=' w-full' > 
                    <Input placeholder='Address' height="45px" border=" 1px solid #000 " />
                </div> 
            </div>
            <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Features</p>
            <Input placeholder='Enter the address of the property' height="45px" border=" 1px solid #000 " /> 
            <p className=' my-6 font-Montserrat-Bold  ' >Edit Norah’s Court Estate</p>
            <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Upload Photo</p>
            <Input type="file" paddingTop="7px" placeholder='Enter the address of the property' height="45px" border=" 1px solid #000 " /> 
            <p className=' text-[15px] font-Inter-Regular ' >First photo would be the display photo </p>
            <div className=' flex items-center mt-6 ' >
                <button className=' w-[25px] h-[25px] ] rounded-full  ' >
                    <img src={Add} className=" w-full h-full object-cover " alt="add" />
                </button>
                <p className=' font-Inter-Regular ml-3 ' >Add more photos</p>
            </div>
            <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Upload Video</p> 
            <Input type="file" paddingTop="7px" placeholder='Enter the address of the property' height="45px" border=" 1px solid #000 " /> 
            <button onClick={()=> props.next(true)} className=' bg-[#3DB2FF] mx-auto w-[300px] h-10 mt-8 rounded-md text-white font-Inter-Bold ' >Next</button>
        </div>
    )
} 