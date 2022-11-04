import React, { useState } from 'react'
import home from "../../assests/images/icons/home.png"
import booking from "../../assests/images/icons/booking.png"
import property from "../../assests/images/icons/property.png"
import add from "../../assests/images/icons/add.png"
import blog from "../../assests/images/icons/blog.png"
import client from "../../assests/images/icons/client.png"
import esp from "../../assests/images/icons/esp.png"
import sell from "../../assests/images/icons/sell.png"
import settings from "../../assests/images/icons/settings.png"
import support from "../../assests/images/icons/support.png"
import wallet from "../../assests/images/icons/wallet.png"
import { useNavigate } from 'react-router-dom'

export default function Index() {

    const [ activeTab, setActiveTab ] = useState("Dashboard")
    const navigate = useNavigate()
    const SideBarArray = [
        {
            name: "Dashboard",
            image: home
        },
        {
            name: "Property",
            image: property
        },
        {
            name: "Add Property",
            image: add
        },
        {
            name: "Sell Property",
            image: sell
        },
        {
            name: "Booking",
            image: booking
        },
        {
            name: "Client",
            image: client
        },
        {
            name: "ESP",
            image: esp
        },
        {
            name: "Wallet",
            image: wallet,
            others: ["Transaction", "Payment" ]
        },
        {
            name: "Support",
            image: support,
            others: ["Message", "chat", "Feedback" ]
        },
        {
            name: "Blog",
            image: blog
        },
        {
            name: "Settings",
            image: settings
        },
    ]

    const ClickHandler =(item, data)=> {
        let route = item.toLowerCase().replace(" ","-")
        if(!data){
            if(item === "Dashboard"){ 
                navigate("/dashboard")
            } else { 
                navigate("/dashboard/"+route)
            }
        }
        setActiveTab(item)
    }

    return (
        <div className=' w-fit  ' >
            <div className=' w-[330px] pt-10 h-screen bg-black overflow-y-auto overflow-x-hidden pb-10   ' >
                {SideBarArray.map((item) => {
                    return(
                        <div key={item.name} className=' w-full my-6 px-2 ' >
                            <button onClick={()=> ClickHandler(item.name, item.others)} className={item.name === activeTab ? ' bg-[#FFFFFF66] px-5 flex items-center rounded-md h-[50px] w-full ' : ' px-5 flex items-center rounded-md h-[50px] w-full '} >
                                <div className=' w-9 h-5 ' >
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <p className=' text-lg font-Inter-Medium ml-6 text-white ' >{item.name}</p>
                                {item.others && (
                                    <svg className={item.name === activeTab ? ' ml-auto ' : ' -rotate-90 ml-auto ' } width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.126962 1.00003C0.133472 0.744113 0.237951 0.490688 0.437847 0.30071C0.838664 -0.0802201 1.47046 -0.0641478 1.85139 0.336669L5.07127 3.72465L8.44408 0.629422C8.85169 0.256668 9.4842 0.283762 9.85698 0.690374C10.2297 1.09798 10.2026 1.7305 9.79703 2.10331L5.70011 5.86233C5.2976 6.23122 4.67493 6.21037 4.29887 5.81468L0.401888 1.71425C0.21191 1.51436 0.120451 1.25595 0.126962 1.00003Z" fill="white"/>
                                    </svg>
                                )}
                            </button>
                            {item.others && item.name === activeTab && (
                                <div className=' w-full px-5 mt-3 ' > 
                                    {item.others.map((item) => {
                                        return( 
                                            <button key={item} className=' flex mb-6 items-center ' >
                                                <div className=' w-9 h-5 ' > 
                                                </div>
                                                <p className=' text-lg font-Inter-Medium ml-6 text-white ' >{item}</p>
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