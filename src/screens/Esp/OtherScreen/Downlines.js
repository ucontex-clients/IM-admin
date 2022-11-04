import React from 'react'
import {
    Table,
    Thead,
    Tbody, 
    Tr,
    Th,
    Td, 
    TableContainer,
    Input
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom' 
import Right from '../../../assests/images/icons/right.png'
import Back from '../../../assests/images/icons/Back.png'

export default function Downlines() {

    const navigate = useNavigate()

    return (
        <div className=' w-full  ' >
            <button onClick={()=> navigate("/dashboard/property")} className=' -ml-5 mb-4 ' > 
                <img src={Back} alt='back' className=' ' />
            </button>
            <div className=' w-full flex justify-between items-center ' >
                <div className=' flex items-center ' >
                    <p className=' font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ' >ESP</p>
                    <img src={Right} alt='right' className=' mr-5 ' />
                    <p className=' font-Inter-Bold text-[15px] mr-5 ' >John Doe</p>
                    <img src={Right} alt='right' className=' mr-5 ' />
                    <p className=' font-Inter-Bold text-[15px] mr-5 text-[#2E3A59] ' >5 downlines</p>
                </div> 
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div> 
            <div className=' my-3 w-full font-Inter-SemiBold text-sm flex items-center justify-end ' >
                <p className=' cursor-pointer ' >Date</p>
                <p className=' ml-3 ' >27/10/2022</p>
            </div>
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'> 
                        <Thead>
                            <Tr> 
                                <Th><input type="checkbox" /></Th>
                                <Th>Down line</Th>
                                <Th>Registered</Th>
                                <Th>Level</Th>
                                <Th>Commissions</Th> 
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><input type="checkbox" /></Td> 
                                <Td>
                                    <div className=' flex items-center ' >
                                        <div className=' w-11 h-11 rounded-full bg-green-500 ' >

                                        </div>
                                        <div className=' ml-2' >
                                            <p className=' text-[13px] ' >Norah’s Court</p> 
                                        </div>
                                    </div>
                                </Td>
                                <Td>29/10/2022</Td>
                                <Td>1</Td>
                                <Td>5000</Td>  
                            </Tr>
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
} 