import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, TextField, Typography, Box } from '@mui/material'
import Layout from '../../components/layout'
import { useNavigate } from 'react-router-dom'

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

export default function WalletPayment() {
  const navigate = useNavigate()
  return (
    <Layout>
      <Box sx={{ p: 5, width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: 5,
          }}
        >
          <Typography variant="h5">All</Typography>
          <Box sx={{ width: '30%' }}>
            <TextField
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
                <StyledTableCell align="center">User</StyledTableCell>
                <StyledTableCell align="center">Property</StyledTableCell>
                <StyledTableCell align="center">Amount</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Amount Paid</StyledTableCell>
                <StyledTableCell align="center">Method</StyledTableCell>
                <StyledTableCell align="center">Balance</StyledTableCell>
                <StyledTableCell align="center">Next Payment</StyledTableCell>
                <StyledTableCell align="center">Remark</StyledTableCell>
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
                      <p className=" text-[13px] ">John Doe</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="center">Diamond Estate</TableCell>
                <TableCell align="center">N6000</TableCell>
                <TableCell align="center">
                  21/02/2020 <br />
                  09:23
                </TableCell>
                <TableCell align="center">
                  Out Right <br />
                  N6000
                </TableCell>
                <TableCell align="center">Online</TableCell>
                <TableCell align="center">N1,000,800</TableCell>
                <TableCell align="center">
                  21/04/2020 <br />
                  N30,000
                </TableCell>
                <TableCell align="center">Approved</TableCell>
                <TableCell align="center">
                  <button
                    onClick={() => navigate('/wallet/payment/view')}
                    className=" text-[#038566] w-[46px] rounded-lg h-5 mr-4 bg-[#03C03833] "
                  >
                    View
                  </button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}
