import { useNavigate } from 'react-router-dom'

import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, TextField, Button } from '@mui/material'
import Right from '../../../assests/images/icons/right.png'
import Back from '../../../assests/images/icons/Back.png'
import Layout from '../../../components/layout'
import { Input } from '@chakra-ui/react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 700,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 700,
  },
}))

export default function Downlines() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <button onClick={() => navigate(-1)} className=" -ml-5 mb-4 ">
          <img src={Back} alt="back" className=" " />
        </button>
        <div className=" w-full flex justify-between items-center ">
          <div className=" flex items-center ">
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ">
              ESP
            </p>
            <img src={Right} alt="right" className=" mr-5 " />
            <p className=" font-Inter-Bold text-[15px] mr-5 ">John Doe</p>
            <img src={Right} alt="right" className=" mr-5 " />
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#2E3A59] ">
              5 downlines
            </p>
          </div>
          <Input
            placeholder="Search Property and user"
            paddingLeft="5"
            paddingRight="5"
            border="1px solid #C6C5C5"
            height="45px"
            borderRadius="50px"
            width="281px"
          />
        </div>
        <div className=" my-3 w-full font-Inter-SemiBold text-sm flex items-center justify-end ">
          <p className=" cursor-pointer ">Date</p>
          <p className=" ml-3 ">27/10/2022</p>
        </div>
        <div className=" w-full mt-8 text-sm font-Montserrat-SemiBold ">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">
                    <input type="checkbox" />
                  </StyledTableCell>
                  <StyledTableCell align="center">Down line</StyledTableCell>
                  <StyledTableCell align="center">Registered</StyledTableCell>
                  <StyledTableCell align="center">Level</StyledTableCell>
                  <StyledTableCell align="center">Commissions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    <input type="checkbox" />
                  </TableCell>
                  <TableCell align="center">
                    <div className=" flex items-center ">
                      <div className=" w-11 h-11 rounded-full bg-green-500 "></div>
                      <div className=" ml-2">
                        <p className=" text-[13px] ">Norah’s Court</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell align="center">29/10/2022</TableCell>
                  <TableCell
                    align="center"
                    sx={{ color: 'green', pt: 3, pb: 3 }}
                  >
                    1
                  </TableCell>
                  <TableCell align="center">N5000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </Layout>
  )
}
