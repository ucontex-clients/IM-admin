import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import { styled } from '@mui/material/styles'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

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

export default function WalletCommissionTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <input type="checkbox" />
            </StyledTableCell>
            <StyledTableCell align="center">ESP</StyledTableCell>
            <StyledTableCell align="center">Referee</StyledTableCell>
            <StyledTableCell align="center">Amount</StyledTableCell>
            <StyledTableCell align="center">Commission</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Method</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
            <TableCell align="center">Esther Joy Port Harcourt</TableCell>
            <TableCell align="center">N850,000</TableCell>

            <TableCell align="center">N850,000</TableCell>
            <TableCell align="center">
              21/02/2020 <br />
              09:23
            </TableCell>
            <TableCell align="center">View History</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
