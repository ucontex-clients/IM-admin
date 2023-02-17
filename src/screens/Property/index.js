import Layout from '../../components/layout'
import PropertyTable from '../../components/Table/PropertyTable'
import { Box, TextField, Typography } from '@mui/material'

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
          <Typography variant="h5">Property</Typography>
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
        <Box sx={{ mt: 3 }}>
          <PropertyTable />
        </Box>
      </Box>
    </Layout>
  )
}
