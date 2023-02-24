import { Box } from '@mui/material'
import Layout from '../../components/layout'

export default function WalletPaymentView() {
  return (
    <Layout>
      <Box sx={{ p: 10, background: '#e4e4e4' }}>
        <h5>View Payment Details</h5>
        <Box
          sx={{
            display: 'grid',
            gap: 1,
            rowGap: 3,
            gridTemplateColumns: 'repeat(2, 1fr)',
            m: 4,
            p: 5,
            background: '#fff',
          }}
        >
          <p>
            <b>Name:</b>
          </p>
          <p>John Doe</p>
          <p>
            <b>Trans. ID:</b>
          </p>
          <p style={{ marginBottom: 4 }}>ID: 0023453</p>
          <p>
            <b>Property:</b>
          </p>
          <p>Garden Estate Port</p>
          <p>
            <b>No of Property:</b>
          </p>
          <p>4</p>
          <p>
            <b>Plot Code:</b>
          </p>
          <div
            style={{
              display: 'grid',
              gap: 1,
              rowGap: 5,
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <p>NCE-001:</p>
            <p>464.89 SQ.M</p>
            <p>NCE-003:</p>
            <p>464.89 SQ.M</p>
            <p>NCE-006:</p>
            <p>464.89 SQ.M</p>
            <p>NCE-002:</p>
            <p>464.89 SQ.M</p>
          </div>
          <p>
            <b>Location:</b>
          </p>
          <p>Port Harcourt</p>
          <p>
            <b>Cost of Property:</b>
          </p>
          <p>N1,850,000</p>
          <p>
            <b>Date Paid:</b>
          </p>
          <p>23/2/2022</p>
          <p>
            <b>Method:</b>
          </p>
          <p>Online</p>
          <p>
            <b>Remark:</b>
          </p>
          <p style={{ color: 'green' }}>Approved</p>
          <p>
            <b>Status:</b>
          </p>
          <p style={{ color: 'green' }}>Completed</p>
        </Box>
      </Box>
    </Layout>
  )
}
