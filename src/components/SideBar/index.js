import React, { useState } from 'react'
import home from '../../assests/images/icons/home.png'
import booking from '../../assests/images/icons/booking.png'
import property from '../../assests/images/icons/property.png'
import add from '../../assests/images/icons/add.png'
import blog from '../../assests/images/icons/blog.png'
import client from '../../assests/images/icons/client.png'
import esp from '../../assests/images/icons/esp.png'
import sell from '../../assests/images/icons/sell.png'
import settings from '../../assests/images/icons/settings.png'
import support from '../../assests/images/icons/support.png'
import wallet from '../../assests/images/icons/wallet.png'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Index() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const path = pathname.slice('1').split('/')[0]
  const path2 = pathname.slice('1').split('/')[1]
  const SideBarArray = [
    {
      name: 'Dashboard',
      image: home,
      route: 'dashboard',
    },
    {
      name: 'Property',
      image: property,
      route: 'property',
    },
    {
      name: 'Add Property',
      image: add,
      route: 'add-property',
    },
    {
      name: 'Sell Property',
      image: sell,
      route: 'sell-property',
    },
    {
      name: 'Booking',
      image: booking,
      route: 'booking',
    },
    {
      name: 'Client',
      image: client,
      route: 'client',
    },
    {
      name: 'ESP',
      image: esp,
      route: 'esp',
    },
    {
      name: 'Wallet',
      image: wallet,
      route: 'wallet',
      others: [
        { name: 'Transaction', route: 'wallet/transaction', id: 'transaction' },
        { name: 'Payment', route: 'wallet/payment', id: 'payment' },
      ],
    },
    {
      name: 'Support',
      image: support,
      others: ['Message', 'chat', 'Feedback'],
    },
    {
      name: 'Blog',
      image: blog,
      route: 'blog',
    },
    {
      name: 'Settings',
      image: settings,
      route: 'settings',
    },
  ]
  // console.log('path', path2)
  const ClickHandler = (route, data) => {
    // let route = item.toLowerCase().replace(' ', '-')
    // console.log(route)
    // if (!data) {
    //   if (route === 'Dashboard') {
    //     navigate('/dashboard')
    //   } else {
    navigate(`/${route}`)
    //   }
    // }
  }

  return (
    <div className=" w-fit  ">
      <div className=" w-[280px] pt-20 h-screen bg-black overflow-y-auto overflow-x-hidden pb-10   ">
        {SideBarArray.map((item) => {
          return (
            <div key={item.name} className=" w-full my-6 px-2 ">
              <button
                onClick={() => ClickHandler(item.route, item.others)}
                className={
                  item.route === path
                    ? ' bg-[#FFFFFF66] px-5 flex items-center rounded-md h-[50px] w-full '
                    : ' px-5 flex items-center rounded-md h-[50px] w-full '
                }
              >
                <div className=" w-9 h-5 ">
                  <img src={item.image} alt={item.name} />
                </div>
                <p className=" text-lg font-Inter-Medium ml-6 text-white ">
                  {item.name}
                </p>
                {item.others && (
                  <svg
                    className={
                      item.route === path ? ' ml-auto ' : ' -rotate-90 ml-auto '
                    }
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.126962 1.00003C0.133472 0.744113 0.237951 0.490688 0.437847 0.30071C0.838664 -0.0802201 1.47046 -0.0641478 1.85139 0.336669L5.07127 3.72465L8.44408 0.629422C8.85169 0.256668 9.4842 0.283762 9.85698 0.690374C10.2297 1.09798 10.2026 1.7305 9.79703 2.10331L5.70011 5.86233C5.2976 6.23122 4.67493 6.21037 4.29887 5.81468L0.401888 1.71425C0.21191 1.51436 0.120451 1.25595 0.126962 1.00003Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
              {item.others && item.route === path && (
                <div className=" w-full px-5 mt-3 ">
                  {item.others.map((item) => {
                    return (
                      <button
                        onClick={() => ClickHandler(item.route, item.others)}
                        key={item.name}
                        className={
                          item.id === path2
                            ? ' bg-[#FFFFFF66]  flex items-center rounded-md h-[50px] w-full '
                            : '  flex items-center rounded-md h-[50px] w-full '
                        }
                        // className=" flex mb-6 items-center "
                      >
                        <div className=" w-9 h-5 "></div>
                        <div>
                          <p className=" text-lg font-Inter-Medium ml-6 text-white ">
                            {item.name}
                          </p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
