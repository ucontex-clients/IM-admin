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
import trash from '../../assests/images/icons/trash.png'

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

export default function BookingTable() {
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
              Name
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Phone
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Property
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Location
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Date
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Status
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Remark
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Action
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
                </Box>{' '}
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="body2">08065568671</Typography>
            </StyledTableCell>
            <StyledTableCell align="center">Diamond Estate</StyledTableCell>
            <StyledTableCell align="center">Port Harcourt</StyledTableCell>
            <StyledTableCell align="center">
              21/2/2020 <br />
              09:23
            </StyledTableCell>
            <StyledTableCell align="center">cancel</StyledTableCell>
            <StyledTableCell align="center">Canceled</StyledTableCell>
            <StyledTableCell align="center">
              <img
                src={trash}
                style={{
                  width: 15,
                  height: 15,
                  paddingLeft: 4,
                }}
                alt="property image"
              />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
