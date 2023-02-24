import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'

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

export default function WalletWithdrawalRequestTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="center">
              <input type="checkbox" />
            </StyledTableCell> */}
            <StyledTableCell align="center">User</StyledTableCell>
            <StyledTableCell align="center">Wallet</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Bank Details</StyledTableCell>
            <StyledTableCell align="center">Withdrawal Amount</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {/* <TableCell component="th" scope="row" align="center">
              <input type="checkbox" />
            </TableCell> */}
            <TableCell align="center">
              <div className=" flex items-center ">
                <div className=" w-11 h-11 rounded-full bg-green-500 "></div>
                <div className=" ml-2">
                  <p className=" text-[13px] ">John Doe</p>
                </div>
              </div>
            </TableCell>

            <TableCell align="center">N6000</TableCell>
            <TableCell align="center">
              21/02/2020 <br />
              09:23
            </TableCell>
            <TableCell align="center">
              Diamond Bank <br />
              002211334455 <br /> Esther joy
            </TableCell>
            <TableCell align="center">N3000</TableCell>
            <TableCell align="center">
              <Button
                variant="outlined"
                sx={{ color: 'green', borderRadius: 10, mr: 1 }}
              >
                Approve
              </Button>
              <Button
                variant="outlined"
                sx={{ color: 'red', borderRadius: 10 }}
              >
                Reject
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
