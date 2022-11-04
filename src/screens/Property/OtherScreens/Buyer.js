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


export default function Buyer() {

    const navigate = useNavigate()

    return (
        <div className=' w-full relative ' >
            <button onClick={()=> navigate("/dashboard/property")} className=' absolute -top-[75px] -left-5 z-40  ' > 
                <img src={Back} alt='back' className=' ' />
            </button>
            <div className=' w-full flex justify-between items-center ' >
                <div className=' flex items-center ' >
                    <p className=' font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ' >Property</p>
                    <img src={Right} alt='right' className=' mr-5 ' />
                    <p className=' font-Inter-Bold text-[15px] mr-5 ' >Buyers</p>
                    <img src={Right} alt='right' className=' mr-5 ' />
                    <p className=' font-Inter-Bold text-[15px] mr-5 text-[#2E3A59] ' >Norah’s Court Estate</p>
                </div>
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div> 
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'> 
                        <Thead>
                            <Tr> 
                                <Th><input type="checkbox" /></Th>
                                <Th>Client</Th>
                                <Th>No. of Plots</Th>
                                <Th>Plots Code</Th>
                                <Th>Dimension</Th>
                                <Th>Amount</Th>
                                <Th>Amount Paid</Th>
                                <Th>Balance</Th>
                                <Th>Payment Plan</Th>
                                <Th>Duration</Th>
                                <Th>Next Payment</Th>
                                <Th>Status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><input type="checkbox" /></Td> 
                                <Td>
                                    <div className=' flex items-center ' >
                                        <div className=' w-10 h-10 rounded-md bg-green-500 ' >

                                        </div>
                                        <div className=' ml-2' >
                                            <p className=' text-[13px] ' >John Doe</p>
                                            <p className=' text-[12px] text-[#6C6C6C] ' >IM-234098909</p>
                                            <p className=' text-[12px] ' >27/08/2022 3pm</p>
                                        </div>
                                    </div>
                                </Td>
                                <Td>4</Td>
                                <Td>
                                    NCE-003:<br/>
                                    NCE-004:<br/>
                                    NCE-005:<br/>
                                    NCE-006:
                                </Td>
                                <Td>
                                    464.89 SQ.M<br/>
                                    464.89 SQ.M<br/>
                                    464.89 SQ.M<br/>
                                    464.89 SQ.M
                                </Td>
                                <Td>N1,890,098</Td>
                                <Td><p className=' text-[#038566] ' >N1,890,098</p></Td> 
                                <Td>0</Td>
                                <Td>Out right</Td>
                                <Td>Nil</Td>
                                <Td>Nil</Td>
                                <Td><p className=' text-[#038566] ' >Completed</p></Td>  
                            </Tr> 
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
} 