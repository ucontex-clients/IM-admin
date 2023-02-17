import * as React from 'react'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Checkbox, Typography, Box } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import image from '../../assests/images/Property.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

export default function BuyerTable() {
  const navigate = useNavigate()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, fontWeight: 700 }} aria-label="simple table">
        <TableHead sx={{ background: '#e4e4e4' }}>
          <StyledTableRow>
            <StyledTableCell>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Client
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              No. of Plots
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Plots Code
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Dimension
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Amount
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Amount Paid
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Balance
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Payment Plan
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Duration
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Next Payment
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Status
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 180 }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={image}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 2,
                    borderRadius: 50,
                  }}
                  alt="property image"
                />
                <Box>
                  <Typography variant="body2">John Doe</Typography>
                  <Typography variant="body2">IM-234098909</Typography>
                  <Typography variant="body2">27/08/2022 3pm</Typography>
                </Box>{' '}
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="body2">4</Typography>
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 100 }}>
              NCE-003:
              <br />
              NCE-004:
              <br />
              NCE-005:
              <br />
              NCE-006:
            </StyledTableCell>
            <StyledTableCell align="center">
              464.89 SQ.M
              <br />
              464.89 SQ.M
              <br />
              464.89 SQ.M
              <br />
              464.89 SQ.M
            </StyledTableCell>
            <StyledTableCell align="center">N1,890,098</StyledTableCell>
            <StyledTableCell align="center">N1,890,098</StyledTableCell>
            <StyledTableCell align="center">0</StyledTableCell>
            <StyledTableCell align="center">Out right</StyledTableCell>
            <StyledTableCell align="center">Nil</StyledTableCell>
            <StyledTableCell align="center">Nil</StyledTableCell>
            <StyledTableCell align="center">Completed</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
