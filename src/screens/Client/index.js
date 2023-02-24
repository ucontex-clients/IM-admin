import React from 'react'
import Layout from '../../components/layout'
import { Box, TextField } from '@mui/material'
import ClientTable from '../../components/Table/ClientTable'

export default function Index() {
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
              Client
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
        <Box sx={{ pt: 3 }}>
          <ClientTable />
        </Box>
      </Box>
    </Layout>
  )
}
