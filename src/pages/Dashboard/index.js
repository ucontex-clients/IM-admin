import React from 'react'
import Layout from '../../components/layout'
import { Box, TextField, Typography, Grid } from '@mui/material'
import money from '../../assests/images/icons/Money.png'
import user from '../../assests/images/icons/People.png'
import equal from '../../assests/images/icons/Equal.png'
import booking from '../../assests/images/icons/Booking2.png'
import { DashboardChart } from '../../components/chart/dashboard'

const info = [
  { title: 'Total Revenue', no: '₦ 15,900,091', im: money },
  { title: 'Total Property', no: '40', im: equal },
  { title: 'Total Client', no: '349', im: user },
  { title: 'Total Booking', no: '789', im: booking },
]

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
          <Typography variant="h5">Dashboard</Typography>
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
        <Grid container spacing={2} sx={{ mt: 2, ml: 0, mr: 0, mb: 2 }}>
          {info.map((d, i) => {
            return (
              <Grid
                key={i}
                item
                md={2.7}
                sx={{ boxShadow: 8, borderRadius: 1, mr: 2.5 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 4,
                  }}
                >
                  {' '}
                  <Typography variant="h6" sx={{ mr: 2 }}>
                    {d.title}
                  </Typography>{' '}
                  <Box
                    sx={{
                      background: 'rgb(255, 0, 0,0.1)',
                      borderRadius: 5,
                    }}
                  >
                    <Box sx={{ m: 1 }}>
                      <img src={d.im} alt="money icon" />
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ mb: 2, textAlign: 'center' }}>
                  <Typography variant="h6">{d.no}</Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
        <Box sx={{ mt: 2, pb: 5 }}>
          <DashboardChart />
        </Box>
      </Box>
    </Layout>
  )
}
