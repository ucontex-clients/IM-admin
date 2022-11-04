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
    const [isActive, setIsActive] = React.useState(0)

    return (
        <div className=' w-full  ' >
            <div className=' w-full flex justify-between items-center ' >
                <p className=' font-Inter-Bold text-lg ' >Inspection Booking</p>
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div> 
            <div className=' flex items-center my-6 ' >
                <p onClick={()=> setIsActive(0)} className={isActive === 0 ? ' text-[#0682D3] text-sm font-Inter-Bold mr-14 cursor-pointer ':' mr-14 cursor-pointer  text-[#2E3A59] text-sm font-Inter-Bold '} >All</p>
                <p onClick={()=> setIsActive(1)} className={isActive === 1 ? ' text-[#0682D3] text-sm font-Inter-Bold mr-14 cursor-pointer ':' mr-14 cursor-pointer  text-[#2E3A59] text-sm font-Inter-Bold '} >New</p>
                <p onClick={()=> setIsActive(2)} className={isActive === 2 ? ' text-[#0682D3] text-sm font-Inter-Bold mr-14 cursor-pointer ':' mr-14 cursor-pointer  text-[#2E3A59] text-sm font-Inter-Bold '} >Completed</p>
            </div>
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'> 
                        <Thead>
                            <Tr> 
                                <Th><input type="checkbox" /></Th>
                                <Th>Name</Th>
                                <Th>Phone</Th>
                                <Th>Property</Th>
                                <Th>Location</Th>
                                <Th>Date</Th>
                                <Th>Status</Th>
                                <Th>Remark</Th>
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
                                <Td>08198234569</Td>
                                <Td>Daimond Estate</Td>
                                <Td>Port harcourt</Td>
                                <Td>27/08/2022<br/>10AM</Td>
                                <Td>
                                    <div >
                                        <p className=' font-Montserrat-Bold text-[#EB3223] cursor-pointer ' >Cancel</p>
                                        <p className=' font-Montserrat-Bold text-[#0984D6] cursor-pointer ' >Reshedule</p>
                                        <p className=' font-Montserrat-Bold text-[#0984D6] cursor-pointer ' >Complete</p>
                                    </div>
                                </Td>
                                <Td><p className=' font-Montserrat-Bold text-[#0984D6] underline cursor-pointer ' >Reshedule</p></Td>
                                <Td>
                                    <button> 
                                        <img src={Trash} alt="trash"/>
                                    </button>
                                </Td>
                            </Tr> 
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
} 