import { Box, Button, Grid, Typography } from '@mui/material'
import Layout from '../../components/layout'
import imag from '../../assests/images/Property.png'
import ClientTab from '../../components/Tabs/ClientTab'

export default function ViewClient() {
  return (
    <Layout>
      <Box
        sx={{
          p: 5,
          width: '100%',
          backgroundColor: '#e4e4e4',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className=" flex items-center ">
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ">
              Customer - John Doe
            </p>
          </div>
          <Box sx={{ width: '30%' }}>
            <Button
              variant="contained"
              sx={{
                background: 'red',
                pl: 4,
                pt: 1,
                pr: 4,
                pb: 1,
                borderRadius: 6,
              }}
            >
              Buy Property
            </Button>
          </Box>
        </Box>
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            sx={{ gap: 3, minheight: 500, backgroundColor: '#e4e4e4' }}
          >
            <Grid item md={3.5} sx={{ background: '#fff', p: 2 }}>
              <Typography variant="body1">Profile</Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 2,
                  pb: 3,
                }}
              >
                <img
                  src={imag}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                  }}
                  alt="user"
                />
              </Box>
              <Typography variant="h5" sx={{ textAlign: 'center', pb: 3 }}>
                John Doe
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                john123
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                IM-20348545
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                john@gmail.com
              </Typography>
            </Grid>
            <Grid item md={3.8} sx={{ background: '#fff', p: 3 }}>
              <Box
                sx={{
                  display: 'grid',
                  gap: 1,
                  rowGap: 3,
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
              >
                <p>
                  <b>Gender:</b>
                </p>
                <p>Female</p>
                <p>
                  <b>DOB:</b>
                </p>
                <p>28-06-1980</p>
                <p>
                  <b>Phone 1:</b>
                </p>
                <p>08065568671</p>
                <p>
                  <b>Phone 2:</b>
                </p>
                <p>080123484893</p>
                <p>
                  <b>Occupation:</b>
                </p>
                <p>Trading</p>
                <p>
                  <b>Country:</b>
                </p>
                <p>Nigeria</p>
                <p>
                  <b>State:</b>
                </p>
                <p>Rivers</p>
                <p>
                  <b>City:</b>
                </p>
                <p>Port Harcourt</p>
                <p>
                  <b>Address:</b>
                </p>
                <p>Far from home</p>
              </Box>
            </Grid>
            <Grid item md={4} sx={{ background: '#fff', p: 3 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: 2,
                  pb: 3,
                }}
              >
                <img
                  src={imag}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 50,
                  }}
                  alt="user"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pb: 3,
                }}
              >
                <img
                  src={imag}
                  style={{
                    width: '100%',
                    height: 120,
                  }}
                  alt="user"
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Next Of Kin
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gap: 1,
                  rowGap: 3,
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  pt: 2,
                }}
              >
                <p>
                  <b>Full Name:</b>
                </p>
                <p>Esther John</p>
                <p>
                  <b>Phone no:</b>
                </p>
                <p>08023457823</p>
                <p>
                  <b>Address:</b>
                </p>
                <p>Far from home</p>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ background: '#fff', mt: 3 }}>
            <ClientTab />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
