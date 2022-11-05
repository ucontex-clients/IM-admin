import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Right from '../../../assests/images/icons/right.png'
import Back from '../../../assests/images/icons/Back.png'

export default function EditProperty() {

    const navigate = useNavigate()

    return (
        <div className=' w-full relative ' >
            <button onClick={()=> navigate(-1)} className=' -ml-5 mb-4 ' > 
                <img src={Back} alt='back' className=' ' />
            </button>
            <div className=' w-full flex overflow-y-auto justify-between items-center ' >
                <div className=' flex items-center ' >
                    <p className=' font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ' >Property</p>
                    <img src={Right} alt='right' className=' mr-5 ' />
                    <p className=' font-Inter-Bold text-[15px] mr-5 ' >Edit</p>
                    <img src={Right} alt='right' className=' mr-5 ' />
                    <p className=' font-Inter-Bold text-[15px] mr-5 text-[#2E3A59] ' >Norah’s Court Estate</p>
                </div>
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div> 
            <div className=' w-[600px] overflow-y-auto font-Montserrat-Medium mt-4 p-6 pb-12 mb-16 border rounded-lg ' > 
                <p className=' my-6 font-Montserrat-Bold  ' >Edit Norah’s Court Estate</p>
                <p className=' text-[15px] mt-4 font-Inter-SemiBold mb-2 ' >Name of Property</p>
                <Input placeholder='Property Name' height="45px" border=" 1px solid #000 " />
                <p className=' text-[15px] mt-4 font-Inter-SemiBold mb-2 ' >Description</p>
                <Textarea placeholder='Write something about the property' height="150px" border=" 1px solid #000 " />
                <p className=' text-[15px] mt-4 font-Inter-SemiBold mb-2 ' >Name of Property</p>
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
                </div><p className=' text-[15px] mt-4 font-Inter-SemiBold mb-2 ' >Name of Property</p>
                <div className=' flex  ' >
                    <div className=' w-full mr-4 ' > 
                        <Input placeholder='City' height="45px" border=" 1px solid #000 " />
                    </div>
                    <div className=' w-full' > 
                        <Input placeholder='Address' height="45px" border=" 1px solid #000 " />
                    </div> 
                </div>
                <p className=' text-[15px] mt-4 font-Inter-SemiBold mb-2 ' >Features</p>
                <Input placeholder='Enter the address of the property' height="45px" border=" 1px solid #000 " /> 
                <p className=' my-6 font-Montserrat-Bold  ' >Edit Norah’s Court Estate</p>
                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Upload Photo</p>
                <Input type="file" paddingTop="7px" placeholder='Enter the address of the property' height="45px" border=" 1px solid #000 " /> 
                <p className=' text-[15px] font-Inter-Regular ' >First photo would be the display photo </p>
            </div>
        </div>
    )
} 