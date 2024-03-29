import { useNavigate } from 'react-router-dom'
import Trash from '../../assests/images/icons/trash.png'
import Layout from '../../components/layout'

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

export default function Index() {
  const navigate = useNavigate()

  return (
    <Layout>
      <Box sx={{ p: 5 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 3,
          }}
        >
          <div className=" flex items-center ">
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ">
              ESP
            </p>
          </div>
          <Box sx={{ width: '30%' }}>
            <TextField
              placeholder="Search Property and User"
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderRadius: 10,
                  },
                },
              }}
            />
          </Box>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <input type="checkbox" />
                </StyledTableCell>
                <StyledTableCell align="center">ESP</StyledTableCell>
                <StyledTableCell align="center">Downline</StyledTableCell>
                <StyledTableCell align="center">
                  Direct Commission
                </StyledTableCell>
                <StyledTableCell align="center">
                  Downline commission
                </StyledTableCell>
                <StyledTableCell align="center">Bonus</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
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
                <TableCell align="center">0</TableCell>
                <TableCell align="center" sx={{ color: 'green', pt: 3, pb: 3 }}>
                  N5000
                </TableCell>
                <TableCell align="center">N0</TableCell>
                <TableCell align="center">Nill</TableCell>
                <TableCell align="center">Activated</TableCell>
                <TableCell align="center">
                  <div className=" flex items-center ">
                    <button
                      onClick={() => navigate('/esp/downlines')}
                      className=" text-[#038566] w-[46px] rounded-lg h-5 mr-4 bg-[#03C03833] "
                    >
                      View
                    </button>

                    <button>
                      <img src={Trash} alt="trash" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}
