import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Right from '../../assests/images/icons/right.png'
import PropertyDetails from './components/PropertyDetail'
import PropertyLayout from './components/PropertyLayout'
import PreviewProperty from './components/PreviewProperty'
import Back from '../../assests/images/icons/Back.png'

export default function Index() {

    const navigate = useNavigate()
    const [tab, setTab] = useState(false)
    const [property, setProperty] = useState([])
    const [preview, setPreview] = useState(false)
    const [amount, setAmount] = useState("");


    let loadProperty = () => {
        let id = localStorage.getItem("propertyId");
        let url = "https://alert-battledress-boa.cyclic.app/api/property/single/" + id;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProperty(res.data)
            })
            .catch(err => console.log(err))
    };

    return (
        <div className='w-full relative pl-10 mb-20' >
            <div className={!preview ? ' w-full ' : ' hidden '} >
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
                        <p className=' font-Inter-Bold text-[15px] mr-5 ' >{property?.name}</p>
                    </div>
                    {/* <Input placeholder="Search Property and user" paddingLeft='5' paddingRight='5' border="1px solid #C6C5C5" height="45px" borderRadius="50px" width="281px" /> */}
                </div>
            </div>
            <div className={!preview ? ' w-full pb-20 ' : ' hidden '} >
                <div className={!tab ? ' w-full ' : ' hidden '} >
                    <PropertyDetails next={setTab} />
                </div>
                <div className={tab ? ' w-full ' : ' hidden '} >
                    <PropertyLayout back={setTab} value={setAmount} next={setPreview} load={() => loadProperty()} />
                </div>
            </div>

            <div className={preview ? ' w-full pb-20 ' : ' hidden '} >
                <PreviewProperty values={property} amount={amount} />
            </div>
        </div>
    )
} 