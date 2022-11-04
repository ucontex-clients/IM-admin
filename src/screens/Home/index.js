import { Input } from '@chakra-ui/react'
import React from 'react'
import Money from '../../assests/images/icons/Money.png'
import Equal from '../../assests/images/icons/Equal.png'
import Booking from '../../assests/images/icons/Booking2.png'
import People from '../../assests/images/icons/People.png'

export default function Index() {
    return (
        <div className=' w-full ' >
            <div className=' w-full flex justify-between items-center ' >
                <p className=' font-Inter-Bold text-lg ' >Dashboard</p>
                <Input placeholder="Search" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div>
            <div className=' w-full overflow-x-auto mt-6 flex  ' > 
                <div className=' flex ' >
                    <div className=' w-[300px] h-fit rounded-lg p-1 mr-4 ' >
                        <div className=' w-full px-4 py-6 rounded-lg ' style={{boxShadow: "0px 4px 20px rgba(91, 71, 188, 0.3)"}}> 
                            <div className=' w-full flex items-center justify-between  '  >
                                <p className=' text-lg font-Inter-Medium text-[#6C6C6C] ' >Total Revenue</p>
                                <div className=' w-10 h-10 rounded-full bg-[#FF12121A] flex justify-center items-center ' >
                                    <img src={Money} alt="Money" />
                                </div>
                            </div>
                            <p className=' text-lg font-Inter-Medium text-[#000] mt-8 ' >N1,045,090</p>
                        </div>
                    </div>
                    <div className=' w-[300px] h-fit rounded-lg p-1 mx-4 ' >
                        <div className=' w-full px-4 py-6 rounded-lg ' style={{boxShadow: "0px 4px 20px rgba(91, 71, 188, 0.3)"}}> 
                            <div className=' w-full flex items-center justify-between  '  >
                                <p className=' text-lg font-Inter-Medium text-[#6C6C6C] ' >Total Property</p>
                                <div className=' w-10 h-10 rounded-full bg-[#FF980033] flex justify-center items-center ' >
                                    <img src={Equal} alt="Equal" />
                                </div>
                            </div>
                            <p className=' text-lg font-Inter-Medium text-[#000] mt-8 ' >20</p>
                        </div>
                    </div>
                    <div className=' w-[300px] h-fit rounded-lg p-1 mx-4 ' >
                        <div className=' w-full px-4 py-6 rounded-lg ' style={{boxShadow: "0px 4px 20px rgba(91, 71, 188, 0.3)"}}> 
                            <div className=' w-full flex items-center justify-between  '  >
                                <p className=' text-lg font-Inter-Medium text-[#0682D333] ' >Total Client</p>
                                <div className=' w-10 h-10 rounded-full bg-[#FF12121A] flex justify-center items-center ' >
                                    <img src={People} alt="People" />
                                </div>
                            </div>
                            <p className=' text-lg font-Inter-Medium text-[#000] mt-8 ' >500</p>
                        </div>
                    </div>
                    <div className=' w-[300px] h-fit rounded-lg p-1 mx-4 ' >
                        <div className=' w-full px-4 py-6 rounded-lg ' style={{boxShadow: "0px 4px 20px rgba(91, 71, 188, 0.3)"}}> 
                            <div className=' w-full flex items-center justify-between  '  >
                                <p className=' text-lg font-Inter-Medium text-[#6C6C6C] ' >Total Bookings</p>
                                <div className=' w-10 h-10 rounded-full bg-[#FF572233] flex justify-center items-center ' >
                                    <img src={Booking} alt="Booking" />
                                </div>
                            </div>
                            <p className=' text-lg font-Inter-Medium text-[#000] mt-8 ' >200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 