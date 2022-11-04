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
import Trash from '../../assests/images/icons/trash.png'

export default function Index() {

    const navigate = useNavigate()

    return (
        <div className=' w-full  ' >
            <div className=' w-full flex justify-between items-center ' >
                <p className=' font-Inter-Bold text-lg ' >ESP</p>
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div> 
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'> 
                        <Thead>
                            <Tr> 
                                <Th><input type="checkbox" /></Th>
                                <Th>ESP</Th>
                                <Th>Downline</Th>
                                <Th>Direct Commission</Th>
                                <Th>Downline commission</Th>
                                <Th>Bonus</Th>
                                <Th>Status</Th> 
                                <Th>Action</Th>
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
                                <Td>0</Td>
                                <Td>N5000</Td>
                                <Td>N0</Td>
                                <Td>Nil</Td>
                                <Td>Activate</Td> 
                                <Td>
                                    <div className=' flex items-center ' >
                                        <button onClick={()=> navigate("/dashboard/esp/downlines")}  className=' text-[#038566] w-[46px] rounded-lg h-5 mr-4 bg-[#03C03833] ' >View</button>

                                        <button> 
                                            <img src={Trash} alt="trash"/>
                                        </button>
                                    </div>
                                </Td>
                            </Tr> 
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
} 