import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ClientPropertyTable from '../Table/ClientProperty'
import ClientBookingTable from '../Table/ClientBookings'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function ClientTab() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <>
        <Tabs
          value={value}
          onChange={handleChange}
          //   textColor="primary"
          sx={{
            color: '#fff',
            pt: 3,
            '& .MuiTab-root.Mui-selected': {
              color: 'blue',
            },
          }}
          indicatorColor="undefined"
          aria-label="basic tabs example"
        >
          <Tab
            label="Property"
            {...a11yProps(0)}
            sx={{ fontWeight: 700, fontSize: 18, pl: 5 }}
          />
          <Tab
            label="Bookings"
            {...a11yProps(1)}
            sx={{ fontWeight: 700, fontSize: 18, pl: 5 }}
          />
          <Tab
            label="Payments"
            {...a11yProps(2)}
            sx={{ fontWeight: 700, fontSize: 18, pl: 5 }}
          />
        </Tabs>
      </>
      <TabPanel value={value} index={0}>
        <ClientPropertyTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ClientBookingTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ClientBookingTable />
      </TabPanel>
    </Box>
  )
}
