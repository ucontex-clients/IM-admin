import React, { useState, useEffect } from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Right from '../../../assests/images/icons/right.png'
import Back from '../../../assests/images/icons/Back.png'
import Location from '../../../assests/images/icons/location.png'
import Plan from '../../../assests/images/plan.png'
import * as axios from 'axios'
import Modal from '../../../components/modal'

export default function PreviewProperty(props) {

    const navigate = useNavigate()
    const [modal, setShowModal] = React.useState(0)
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [url, setUrl] = useState("https://im-property.herokuapp.com/api/property/add");

    let [layoutMap, setLayoutMap] = useState([]);
    useEffect(() => {
        setLayoutMap(JSON.parse(localStorage.getItem("layout")))
    }, []);

    // let property = props.values
    // console.log(property)
    // const submit = async () => {
    //     setLoading(true)
    //     try {

    //         let formData = new FormData()

    //         formData.append('name', props.values.name)
    //         formData.append('pricePerSm', props.amount)
    //         formData.append('about', props.values.about)
    //         formData.append('features', props.values.features)
    //         formData.append('category', props.values.category)
    //         formData.append('state', props.values.state)
    //         formData.append('city', props.values.city)
    //         formData.append('address', props.values.address)
    //         formData.append('LGA', props.data.LGA)
    //         formData.append('color', props.data.color)
    //         formData.append('images', props.data?.images)

    //         // const request = await axios.default.post(url, formData, {
    //         await axios.default.post(url, formData, {
    //             headers: {
    //                 'content-type': 'application/json',
    //                 // Authorization : `Bearer ${getCookie("token")}`
    //                 Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhmNzVhOWE1MGJmNjNlZDNjNTExNjUiLCJyb2xlIjoibm9ybWFsQWRtaW4iLCJpYXQiOjE2NzA1NDU2MDgsImV4cCI6MTY3MzEzNzYwOH0.xopzgQH16saT9xJLxRVhtAhoDo26s3NQNY2lgd0Gttk`
    //             }
    //         })
    //         setMessage('Property Uploaded Successfully')
    //         setShowModal(1)
    //         const t1 = setTimeout(() => {
    //             clearTimeout(t1);
    //         }, 2000);

    //     } catch (error) {
    //         // console.log(error.response.data.error.message);

    //         // setMessage(error.response.data.error.message)
    //         setShowModal(2)
    //         const t1 = setTimeout(() => {
    //             setShowModal(0)
    //             setLoading(false)
    //             clearTimeout(t1);
    //         }, 2000);
    //         return error
    //     }
    //     setLoading(false)
    // };

    let submit = async () => {
        console.log("here")
        setMessage('Property Uploaded Successfully');
        navigate("dashboard/add-property");
        localStorage.clear();
    };

    return (
        <div className=' w-full flex-col flex relative ' >

            <Modal message={message} modal={modal} />
            <div className=' w-full h-[360px]  flex  ' >
                <div className=' w-full h-full mr-4 ' >
                    <div className=' bg-red-800 rounded-lg w-full h-full ' >

                    </div>
                </div>
                <div className=' w-fit flex ' >
                    <div className=' flex' >
                        <div className=' flex flex-col mr-4' >
                            <div className=' bg-red-800 rounded-lg w-[169px] h-full ' >

                            </div>
                            <div className=' bg-red-800 rounded-lg w-[169px]  mt-4 h-full ' >

                            </div>
                            <div className=' bg-red-800 rounded-lg w-[169px]  mt-4 h-full ' >

                            </div>
                        </div>
                        <div className=' flex flex-col' >
                            <div className=' bg-red-800 rounded-lg w-[169px] h-full ' >

                            </div>
                            <div className=' bg-red-800 rounded-lg w-[169px]  mt-4 h-full ' >

                            </div>
                            <div className=' bg-red-800 rounded-lg w-[169px]  mt-4 h-full ' >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className=' font-Montserrat-Bold text-xl mt-4 ' >{props.values?.name}</p>
            <div className=' flex items-center mt-4 ' >
                <img src={Location} className="w-[14px]" alt="" />
                <p className=' font-Montserrat-Medium text-[15px] text-[#6C6C6C] ml-2 ' >{props.values?.location?.address + ", " + props.values?.location?.city + ", " + props.values?.location?.LGA + ", " + props.values?.location?.state}</p>
            </div>
            <p className=' font-Montserrat-Bold text-lg mt-2 ' >N{props.values?.pricePerSm} per Plot</p>
            <div className=' w-[760px] border rounded-lg mt-6 border-[#C6C5C5] p-4 ' >
                <p className=' font-Montserrat-Bold text-xl ' >{props.values?.name}</p>
                <p className=' font-Montserrat-Regular mt-6 ' >{props.values?.about}</p>
            </div>
            <div className=' w-[760px] border rounded-lg mt-6 flex border-[#C6C5C5] p-4 ' >
                <div className=' w-full ' >
                    <p className=' font-Montserrat-Bold text-xl ' >Estate Features</p>
                    {
                        props.values?.estateFeatures?.map((e, i) => {
                            return <>
                                <p className=' font-Montserrat-Regular mt-6 ' >{e}</p>
                            </>
                        })
                    }
                </div>
                <div className=' w-full ' >
                    <p className=' font-Montserrat-Bold text-xl ' >Property Features</p>
                    {
                        props.values?.propertyFeatures?.map((e, i) => {
                            return <>
                                <p className=' font-Montserrat-Regular mt-6 ' >{e}</p>
                            </>
                        })
                    }
                </div>
            </div>
            <p className=' font-Montserrat-Bold text-[15px] mt-6' style={{ textTransform: "capitalize" }} >{props.values?.name}</p>
            <div className=' w-[860px] border rounded-lg  pb-8 flex flex-col border-[#C6C5C5] p-1 ' >
                <p className=' font-Montserrat-Regular text-[#038566] ml-auto mr-6' >30 Plots</p>
                <div className=' w-full grid grid-cols-6 gap-4 mt-4 ' >
                    {layoutMap?.map((e, i) => {
                        return (
                            // <div className=' w-full  flex flex-col border border-[#C6C5C5] relative rounded-md ' >
                            //     <p className=' text-center font-Montserrat-Regular text-xs absolute rotate-90 -left-[10px] top-6 ' >{e.shortSide}m</p>
                            //     <p className=' text-center font-Montserrat-Regular text-xs ' >{e.longSide}m</p>
                            //     <p className=' text-center font-Montserrat-Bold text-xs my-2 text-[#000] ' >{e.area} SQ.M</p>
                            //     <p className=' text-center font-Montserrat-SemiBold text-xs text-[#3DB2FF] ' >N{e.amount}</p>
                            // </div>
                            <div className=' w-full ' >
                                <div className=' w-full  flex flex-col border border-[#C6C5C5] relative rounded-md ' >
                                    <p className=' text-center font-Montserrat-Regular text-xs absolute rotate-90 -left-[10px] top-6 ' >{e.width}m</p>
                                    <p className=' text-center font-Montserrat-Regular text-xs ' >{e.length}m</p>
                                    <p className=' text-center font-Montserrat-Bold text-xs my-2 text-[#000] ' >{e.area} SQ.M</p>
                                    <p className=' text-center font-Montserrat-SemiBold text-xs text-[#3DB2FF] ' >N{e.price}</p>
                                </div>
                                <p className=' font-Montserrat-Regular text-xs mt-1 ' >Residential CGE -001</p>
                            </div>

                        )
                    })}
                </div>
            </div>

            <button onClick={() => submit()} className=' bg-[#3DB2FF] mx-auto w-[300px] h-[45px] mt-8 rounded-md text-white font-Inter-Bold ' >
                {loading ? "Loading" : "Submit"}
            </button>
            {/* <div className=' w-[860px] border rounded-lg mt-6 flex flex-col border-[#C6C5C5] p-1 ' >
                <img src={Plan} alt="plan" className=' w-full object-cover' />
            </div> */}
        </div>
    )
} 