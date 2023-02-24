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
import imag from '../../assests/images/Property.png'
import Trash from '../../assests/images/icons/trash.png'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white,
    fontSize: 14,
    fontWeight: 700,
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

export default function ClientTable() {
  const navigate = useNavigate()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, fontWeight: 700 }} aria-label="simple table">
        <TableHead sx={{ background: '#e4e4e4' }}>
          <StyledTableRow>
            <StyledTableCell>
              <Checkbox />
            </StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">No. of Properties</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
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
                  src={imag}
                  style={{
                    width: 40,
                    height: 40,
                    marginRight: 2,
                    borderRadius: 50,
                  }}
                  alt="user"
                />
                <Box>
                  <Typography variant="body2">John Doe</Typography>
                  {/* <Typography variant="body2">IM-234098909</Typography>
                  <Typography variant="body2">27/08/2022 3pm</Typography> */}
                </Box>{' '}
              </Box>
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 120 }}>
              <Typography variant="body2">
                john123 <br /> IM-234098909
              </Typography>
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ minWidth: 100 }}>
              john@gmail.com
            </StyledTableCell>
            <StyledTableCell align="center">28/2/2022 3pm</StyledTableCell>
            <StyledTableCell align="center">
              <p
                onClick={() => navigate('/property/buyer')}
                className=" font-Montserrat-Bold text-[#0984D6] underline cursor-pointer "
              >
                1
              </p>
            </StyledTableCell>
            <StyledTableCell align="center">
              <p className=" font-Montserrat-Bold text-[#0984D6] underline mr-4 cursor-pointer text-center ">
                View
                <br /> Property
              </p>
            </StyledTableCell>
            <StyledTableCell align="center">
              <div className=" flex items-center ">
                <button
                  onClick={() => navigate('/client/view')}
                  className=" text-[#038566] w-[46px] rounded-lg h-5 mr-4 bg-[#03C03833] "
                >
                  View
                </button>

                <button>
                  <img src={Trash} alt="trash" />
                </button>
              </div>
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
