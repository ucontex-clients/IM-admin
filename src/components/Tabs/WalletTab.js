import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ClientBookingTable from '../Table/ClientBookings'
import WalletPaymentTable from '../Table/WalletPayment'
import WalletCommissionTable from '../Table/WalletCommission'
import WalletWithdrawalRequestTable from '../Table/WalletWithdrawal'

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

export default function WalletTab() {
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
            label="All Payment"
            {...a11yProps(0)}
            sx={{ fontSize: 16, pl: 3 }}
          />
          <Tab
            label="ESP Commission"
            {...a11yProps(1)}
            sx={{ fontSize: 16, pl: 3 }}
          />
          <Tab
            label="Withdrawal Request"
            {...a11yProps(2)}
            sx={{ fontSize: 16, pl: 3 }}
          />
          <Tab
            label="All Withdrawalt"
            {...a11yProps(3)}
            sx={{ fontSize: 16, pl: 3 }}
          />
        </Tabs>
      </>
      <TabPanel value={value} index={0}>
        <WalletPaymentTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WalletCommissionTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <WalletWithdrawalRequestTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WalletWithdrawalRequestTable />
      </TabPanel>
    </Box>
  )
}
