import { Box, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Trash from '../../assests/images/icons/trash.png'
import Right from '../../assests/images/icons/right.png'
import Layout from '../../components/layout'
import BookingTab from '../../components/Tabs/BookingTab'

export default function Index() {
  const navigate = useNavigate()
  const [isActive, setIsActive] = React.useState(0)

  return (
    <Layout>
      <Box sx={{ p: 5, width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className=" flex items-center ">
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ">
              Inspection Booking
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
        <BookingTab />
      </Box>
    </Layout>
  )
}
