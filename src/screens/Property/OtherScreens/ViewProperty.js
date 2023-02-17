import { Box, Grid, TextField, Typography } from '@mui/material'
import Layout from '../../../components/layout'
import Right from '../../../assests/images/icons/right.png'
import im4 from '../../../assests/images/im4.jpg'
import im1 from '../../../assests/images/im1.jpg'
import im2 from '../../../assests/images/im2.jpg'
import im3 from '../../../assests/images/im3.jpg'
import plan from '../../../assests/images/plan.png'
import location from '../../../assests/images/icons/location.png'

const imag = [im1, im2, im3, im4]

export default function ViewProperty() {
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
              Property
            </p>
            <img src={Right} alt="right" className=" mr-5 " />
            <p className=" font-Inter-Bold text-[15px] mr-5 text-[#2E3A59] ">
              Norah’s Court Estate
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
        <Grid container sx={{ mt: 5 }}>
          <Grid item md={6}>
            <img src={im4} alt="property" />
          </Grid>
          <Grid item md={6}>
            <Grid container spacing={2}>
              {imag.map((im, i) => {
                return (
                  <Grid item md={6} key={i}>
                    <img src={im} alt="property" />
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
        <Box sx={{ pt: 3, pb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Norah’s Court Estate
          </Typography>
        </Box>
        <Box sx={{ pb: 5 }}>
          <Grid sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={location}
              alt="location"
              style={{ width: 10, height: 10 }}
            />
            <Typography variant="body1">
              Obinze Umuokanne road, Owerri, Imo State
            </Typography>
          </Grid>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            N350,000 - N500,000
          </Typography>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Box
            sx={{
              width: '70%',
              border: '1px solid #9BA49E',
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              About Property
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse rhoncus ex libero, ac faucibus tellus congue vitae.
              Aenean a ullamcorper velit. Sed at nisl ac sem posuere semper quis
              eget velit. Phasellus eleifend ac tellus eu pellentesque.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pb: 2 }}>
          <Box
            sx={{
              width: '70%',
              border: '1px solid #9BA49E',
              p: 2,
              borderRadius: 2,
            }}
          >
            <Grid container>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Estate Features
                </Typography>
                <Typography variant="body1">Mini Pleasure Park</Typography>
                <Typography variant="body1">Hotel</Typography>
                <Typography variant="body1">School</Typography>
                <Typography variant="body1">Swimming Pool</Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Property Features
                </Typography>
                <Typography variant="body1">Dry Land</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: '70%', pt: 5, pb: 5 }}>
            <img src={plan} alt="land" />
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
