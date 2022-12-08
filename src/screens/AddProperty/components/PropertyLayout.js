import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import Add from '../../../assests/images/icons/addp.png'

export default function PropertyLayout(props) {

    return (
        <div className=' w-full flex flex-col ' > 
            <div className=' w-full flex ' > 
                <div className=' w-full mr-3 overflow-y-auto flex flex-col font-Montserrat-Medium mt-4 p-6 pb-12 border rounded-lg ' > 
                    <p className=' my-6 font-Montserrat-Bold text-xl ' >About Property Info</p>
                    <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Upload Layout Photo</p> 
                    <Input type="file" paddingTop="7px"  height="45px" border=" 1px solid #000 " />
                    <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Price per Square Meter</p>
                    <Input onChange={(e)=> props.value(e.target.value)} placeholder='1000' height="45px" border=" 1px solid #000 " /> 
                    <p className=' text-[15px] font-Inter-SemiBold mt-1 ' >Enter Price for 1 Square meter of the property</p>
                    <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Price per Square Meter</p>
                    <div className=' w-full mt-3 border border-[#000000] rounded-md p-6 ' >
                        <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Price per Square Meter</p>
                        <Input placeholder='Residential' height="45px" border=" 1px solid #000 " /> 
                        <p className=' text-[15px] my-6 font-Inter-Regular' >Measurement</p>
                        <div className=' w-full flex ' >
                            <div className=' w-full mr-4 ' >
                                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Length</p>
                                <Input placeholder='30' height="45px" border=" 1px solid #000 " />  
                            </div>
                            <div className=' w-full ' >
                                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Width</p>
                                <Input placeholder='30' height="45px" border=" 1px solid #000 " />  
                            </div>
                        </div> 
                        <div className=' w-full flex mt-6 ' >
                            <div className=' w-full mr-4 ' >
                                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Cost</p>
                                <button className=' w-full bg-[#C6C5C5] h-[45px] rounded-md ' >90000</button>
                            </div>
                            <div className=' w-full ' > 
                            </div>
                        </div>  
                        <button className=' w-full bg-[#3DB2FF] h-[45px] text-white rounded-md mt-10  font-Inter-Bold ' >Add Layout</button>
                    </div>
                    <div className=' flex items-center mt-6 ' >
                        <button className=' w-[25px] h-[25px] ] rounded-full  ' >
                            <img src={Add} className=" w-full h-full object-cover " alt="add" />
                        </button>
                        <p className=' font-Inter-Regular ml-3 ' >Add more photos</p>
                    </div> 
                </div>

                <div className=' w-full ml-3 h-fit overflow-y-auto flex flex-col font-Montserrat-Medium mt-4 p-6 pb-12 border rounded-lg ' >
                    <p className=' my-6 font-Montserrat-Bold text-xl  ' >Property Layout Preview</p>
                    <div className=' w-full border-t border-[#C6C5C5] pt-6  '>
                        <div className=' w-full grid grid-cols-3 gap-6 ' >
                            <div className=' w-full  flex flex-col border border-[#C6C5C5] relative rounded-md ' >
                                <p className=' text-center font-Montserrat-Regular text-xs absolute rotate-90 -left-[10px] top-6 ' >15.3m</p>
                                <p className=' text-center font-Montserrat-Regular text-xs ' >30.6m</p>
                                <p className=' text-center font-Montserrat-Bold text-xs my-2 text-[#000] ' >464.89 SQ.M</p>
                                <p className=' text-center font-Montserrat-SemiBold text-xs text-[#3DB2FF] ' >N400,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=> props.next(true)} className=' bg-[#3DB2FF] mx-auto w-[300px] h-[45px] mt-8 rounded-md text-white font-Inter-Bold ' >Preview</button>
        </div>
    )
} 