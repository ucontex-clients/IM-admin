import React, { useState } from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Right from '../../assests/images/icons/right.png'
import Add from '../../assests/images/icons/addp.png'
import PropertyDetails from './components/PropertyDetail'
import PropertyLayout from './components/PropertyLayout'
import PreviewProperty from './components/PreviewProperty'
import Back from '../../assests/images/icons/Back.png'

export default function Index() {

    const navigate = useNavigate()
    const [tab, setTab] = useState(false)
    const [preview, setPreview] = useState(false)
    const [amount, setAmount] = useState("")
    const [value, setValue] = useState({ name: '', about: '', features: '', state: '', city: '', address: '', LGA: '', color: '#333' })

    console.log(value);

    return (
        <div className=' w-full relative pl-10 mb-20 ' >
            <div className={!preview ? ' w-full pb-20 ' : ' hidden '} >
                <div className=' w-full flex overflow-y-auto justify-between items-center ' >
                    <div className=' flex items-center ' >
                        <p className=' font-Inter-Bold text-2xl mr-5 text-[#000] ' >Add Property</p>
                    </div>
                </div>
            </div>
            <div className={preview ? ' w-full mb-8 ' : ' hidden '} >
                <button onClick={() => setPreview(false)} className=' -ml-5 mb-4 ' >
                    <img src={Back} alt='back' className=' ' />
                </button>
                <div className=' w-full flex justify-between items-center ' >
                    <div className=' flex items-center ' >
                        <p className=' font-Inter-Bold text-[15px] mr-5 text-[#6C6C6C] ' >Property</p>
                        <img src={Right} alt='right' className=' mr-5 ' />
                        <p className=' font-Inter-Bold text-[15px] mr-5 ' >Norah’s Court Estate</p>
                    </div>
                    {/* <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" /> */}
                </div>
            </div>
            <div className={!preview ? ' w-full pb-20 ' : ' hidden '} >
                <div className={!tab ? ' w-full ' : ' hidden '} >
                    <PropertyDetails next={setTab} value={setValue} />
                </div>
                <div className={tab ? ' w-full ' : ' hidden '} >
                    <PropertyLayout back={setTab} value={setAmount} next={setPreview} />
                </div>
            </div>

            <div className={preview ? ' w-full pb-20 ' : ' hidden '} >
                <PreviewProperty values={value} amount={amount} />
            </div>
        </div>
    )
} 