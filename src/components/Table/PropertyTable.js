import * as React from 'react'
import Table from '@mui/material/Table'
import { styled } from '@mui/material/styles'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Checkbox, Link, Typography, Box } from '@mui/material'

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

export default function PropertyTable() {
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
              No. of plots
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Sold
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Unsold
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Owner
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 14 }}
            >
              Action
            </StyledTableCell>
            <StyledTableCell
              align="center"
              sx={{ fontWeight: 700, fontSize: 12 }}
            ></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="row">
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align="center">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={image}
                  style={{ width: 40, height: 40, marginRight: 2 }}
                  alt="property image"
                />
                <Box>
                  <Typography variant="body2">Norah's Court</Typography>
                  <Typography variant="body2">N350,000</Typography>
                </Box>{' '}
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Typography variant="body2" sx={{ maxWidth: 150 }}>
                East West road, Port Harcourt Rivers State
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center">27/08/2022</StyledTableCell>
            <StyledTableCell align="center">100</StyledTableCell>
            <StyledTableCell align="center">50</StyledTableCell>
            <StyledTableCell align="center">50</StyledTableCell>
            <StyledTableCell align="center">
              <Link
                sx={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => navigate('/property/buyer')}
              >
                Buyers
              </Link>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Link
                sx={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => navigate('/property/view')}
              >
                View Property
              </Link>
            </StyledTableCell>
            <StyledTableCell align="center">
              <Link
                sx={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => navigate('/property/edit-property')}
              >
                Edit
              </Link>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
