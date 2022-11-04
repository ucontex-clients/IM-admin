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
                <p className=' font-Inter-Bold text-lg ' >Clients</p>
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div> 
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'> 
                        <Thead>
                            <Tr> 
                                <Th><input type="checkbox" /></Th>
                                <Th>Name</Th>
                                <Th>ID</Th>
                                <Th>Email</Th>
                                <Th>Date</Th>
                                <Th>No. of Properties</Th>
                                <Th></Th> 
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
                                <Td>John123<br />IM-234098909</Td>
                                <Td>Johndoe@example.com</Td>
                                <Td>27/08/2022 3pm</Td>
                                <Td><p className=' font-Montserrat-Bold text-[#0984D6] ' >1</p></Td> 
                                <Td><p onClick={()=> navigate("/dashboard/property/buyer")} className=' font-Montserrat-Bold text-[#0984D6] underline cursor-pointer ' >1</p></Td>
                                <Td><p className=' font-Montserrat-Bold text-[#0984D6] underline mr-4 cursor-pointer text-center ' >View<br/> Property</p></Td>
                                <Td>
                                    <div className=' flex items-center ' >
                                        <button onClick={()=> navigate("/dashboard/property/edit-property")}  className=' text-[#038566] w-[46px] rounded-lg h-5 mr-4 bg-[#03C03833] ' >View</button>

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