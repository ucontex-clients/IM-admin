import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../assests/images/im.png'

export default function Index() {
    const [user, setUser] = useState(localStorage.getItem('imAdminToken'));
    let navigate = useNavigate();
    let logout = async () => {
        if (window.confirm("Do you want to Log-Out?")) {
            await localStorage.removeItem('imAdminToken');
            navigate('/')
        }
    };
    return (
        <div className=' w-full h-[60px] px-4 shadow-lg flex items-center justify-between ' >
            <img src={Logo} alt="logo" />
            <div className=' border-l border-[#000] h-8 pl-4 flex items-center ' >
                <div className=' w-8 h-8 rounded-full bg-green-500 mr-6 ' >

                </div>
                <p className=' font-Inter-Medium mr-6 ' >Micheal</p>
                <p className=' font-Inter-Medium' style={{ cursor: "pointer" }} onClick={() => logout()} >Log Out</p>
            </div>
        </div>
    )
} 