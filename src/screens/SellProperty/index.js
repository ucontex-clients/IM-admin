import React, { useState } from 'react'
import Register from './Components/Register'
import Login from './Components/Login'
import UpdateProfile from './Components/UpdateProfile'
import Layout from '../../components/layout'
import { Box } from '@mui/material'

export default function Index() {
  const [tab, setTab] = useState(2)

  return (
    <Layout>
      <Box sx={{ pt: 2 }}>
        <p className=" mb-4 font-Montserrat-Bold ml-6 ">Sell Property</p>
        <div className=" w-full flex flex-col items-center font-Montserrat-Medium mt-4 p-4  border rounded-lg ">
          {tab !== 2 && (
            <div className=" w-[600px] my-6 py-8  flex flex-col ">
              <div className=" w-full flex justify-center items-center  ">
                <button
                  onClick={() => setTab(0)}
                  className={
                    !tab
                      ? ' font-Montserrat-Bold text-lg mr-4 '
                      : ' font-Montserrat-Regular text-lg mr-4 '
                  }
                >
                  Login
                </button>
                <button
                  onClick={() => setTab(1)}
                  className={
                    tab
                      ? ' font-Montserrat-Bold text-lg ml-4 '
                      : ' font-Montserrat-Regular text-lg ml-4 '
                  }
                >
                  Register
                </button>
              </div>

              {tab === 0 && <Login />}

              {tab === 1 && <Register />}
            </div>
          )}

          {tab === 2 && <UpdateProfile />}
        </div>
      </Box>
    </Layout>
  )
}
