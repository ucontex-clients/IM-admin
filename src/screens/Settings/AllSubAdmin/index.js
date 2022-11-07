import React from 'react' 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { BASEURL } from '../../../BasicUrl/Url';
import { getCookie } from 'cookies-next';
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


export default function NewListing(props){ 

    // const { isLoading, data } = useQuery(['subadmin'], () =>
    //     fetch(`${BASEURL.URL}/settings/get-subadmin`, {
    //         method: 'GET', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json', 
    //             Authorization : `Bearer ${getCookie("token")}`
    //         }
    //     }).then(res =>
    //         res.json()
    //     )
    // )  

    // console.log(data); 

    const navigate = useNavigate()


    return(
        <div>     
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'> 
                        <Thead>
                            <Tr> 
                                <Th><input type="checkbox" /></Th>
                                <Th>ID</Th>
                                <Th>User</Th> 
                                <Th>Created</Th>
                                <Th>Total Commision</Th>
                                <Th>Last Login</Th>
                                <Th>Recent Activity</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><input type="checkbox" /></Td> 
                                <Td>
                                    <div className=' flex items-center ' >
                                        <div className=' w-11 h-11 rounded-md bg-green-500 ' >

                                        </div>
                                        <div className=' ml-2' >
                                            <p className=' text-[13px] ' >Norah’s Court</p>
                                            <p className=' text-[12px] ' >350,000</p>
                                        </div>
                                    </div>
                                </Td>
                                <Td>East West Road, Port Harcourt, Rivers state</Td>
                                <Td>27/08/2022 3pm</Td>
                                <Td>1000</Td>
                                <Td>500</Td> 
                                <Td><p onClick={()=> navigate("/dashboard/property/buyer")} className=' font-Montserrat-Bold text-[#0984D6] underline cursor-pointer ' >Buyers</p></Td>
                                <Td>
                                    <div className=' flex items-center ' >
                                        <p className=' font-Montserrat-Bold text-[#0984D6] underline mr-4 cursor-pointer text-center ' >View<br/> Property</p>
                                        <button onClick={()=> navigate("/dashboard/property/edit-property")}  className=' text-[#038566] w-[46px] rounded-lg h-5 ml-4 bg-[#03C03833] ' >Edit</button>
                                    </div>
                                </Td>
                            </Tr> 
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div> 
            <div className=' w-full flex items-center mt-20 ' >
                <p style={{ fontSize: "12px"}} className=' ml-auto  font-Inter-Medium' >1-2 of items</p>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowBack size={15} /></button>
                <button className=' w-7 h-7 rounded bg-[#0984D6] text-white text-xs flex justify-center items-center ml-2 ' >1</button>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex text-xs justify-center items-center ml-2 ' >2</button>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowForward size={15} /></button>
            </div>
        </div>
    )
}