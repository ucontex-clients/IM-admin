import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Box } from '@mui/material'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false,
    },
    title: {
      display: true,
      text: 'Revenue Chart',
    },
  },
}

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [992, 128, 113, 675, 342, 876, 981, 567, 289, 964, 789, 864],
      backgroundColor: 'rgba(0,0,205)',
      barThickness: 8,
    },
    // {
    //   label: 'Dataset 2',
    //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
}

export function DashboardChart() {
  return (
    <Box sx={{ mt: 6, mb: 5, boxShadow: 5 }}>
      {' '}
      <Bar options={options} data={data} />
    </Box>
  )
}
