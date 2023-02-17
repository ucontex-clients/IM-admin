import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BookingTable from '../Table/BookingTable'

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

export default function BookingTab() {
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
            '& .MuiTab-root.Mui-selected': {
              color: 'blue',
            },
          }}
          indicatorColor="undefined"
          aria-label="basic tabs example"
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="New" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
      </>
      <TabPanel value={value} index={0}>
        <BookingTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookingTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BookingTable />
      </TabPanel>
    </Box>
  )
}
