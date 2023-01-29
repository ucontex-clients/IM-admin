import React, { useEffect, useState } from 'react'
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

export default function Index() {

    const navigate = useNavigate()
    let [property, setProperty] = useState([]);
    const [url] = useState("https://im-property.herokuapp.com/api/property/all");

    useEffect(() => {
        loadProperties();
    }, []);

    let loadProperties = () => {
        fetch(url)
            .then(e => e.json())
            .then(res => {
                setProperty(res)
            })
    };

    return (
        <div className=' w-full  ' >
            <div className=' w-full flex justify-between items-center ' >
                <p className=' font-Inter-Bold text-lg ' >Property</p>
                <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" />
            </div>
            <div className=' w-full mt-8 text-sm font-Montserrat-SemiBold ' >
                <TableContainer>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th><input type="checkbox" /></Th>
                                <Th>Property</Th>
                                <Th>Location</Th>
                                <Th>Date</Th>
                                <Th>No. of Plots</Th>
                                <Th>Sold</Th>
                                <Th>Unsold</Th>
                                <Th>Owners</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {property?.map((e, i) => {
                                return <Tr>
                                    <Td><input type="checkbox" /></Td>
                                    <Td>
                                        <div className=' flex items-center ' >
                                            <div className=' w-11 h-11 rounded-md bg-green-500 ' >

                                            </div>
                                            <div className=' ml-2' >
                                                <p className=' text-[13px] ' >{e.name}</p>
                                                <p className=' text-[12px] ' >350,000</p>
                                            </div>
                                        </div>
                                    </Td>
                                    <Td>East West Road, Port Harcourt, Rivers state</Td>
                                    <Td>27/08/2022 3pm</Td>
                                    <Td>1000</Td>
                                    <Td>500</Td>
                                    <Td>500</Td>
                                    <Td><p onClick={() => navigate("/dashboard/property/buyer")} className=' font-Montserrat-Bold text-[#0984D6] underline cursor-pointer ' >Buyers</p></Td>
                                    <Td>
                                        <div className=' flex items-center ' >
                                            <p className=' font-Montserrat-Bold text-[#0984D6] underline mr-4 cursor-pointer text-center ' >View<br /> Property</p>
                                            <button onClick={() => navigate("/dashboard/property/edit-property")} className=' text-[#038566] w-[46px] rounded-lg h-5 ml-4 bg-[#03C03833] ' >Edit</button>
                                        </div>
                                    </Td>
                                </Tr>
                            })}

                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
} 