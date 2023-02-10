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
    const [property, setProperty] = useState([]);
    let [layoutMap, setLayoutMap] = useState(JSON.parse(localStorage.getItem("layout")));

    useEffect(() => {
        setLayoutMap(JSON.parse(localStorage.getItem("layout")));
        loadProperty();
    }, [layoutMap]);

    let loadProperty = () => {
        let id = localStorage.getItem("propertyId");
        let url = "https://im-property.herokuapp.com/api/property/single/" + id;
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setProperty(res.message.data)
            })
            .catch(err => console.log(err))
    };

    let submit = async () => {
        setMessage('Property Uploaded Successfully');
        navigate("/dashboard/add-property");
        localStorage.removeItem("propertyId");
        localStorage.removeItem("pricePerSm");
        localStorage.removeItem("layout");
    };

    return (
        <div className=' w-full flex-col flex relative ' >

            <Modal message={message} modal={modal} />

            <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#708080", gap: "15px", padding: "15px" }}>
                    {property?.imagesURLs?.map((f, g) => {
                        return <>
                            <img style={{ height: "100%", borderRadius: "5px" }} key={g} src={f} alt={g} />
                        </>
                    })}
                </div>
            </div>
            <p className=' font-Montserrat-Bold text-xl mt-4 ' >{property?.name}</p>
            <div className=' flex items-center mt-4 ' >
                <img src={Location} className="w-[14px]" alt="" />
                <p className=' font-Montserrat-Medium text-[15px] text-[#6C6C6C] ml-2 ' >{property?.location?.address + ", " + property?.location?.city + ", " + property?.location?.LGA + ", " + property?.location?.state}</p>
            </div>
            <p className=' font-Montserrat-Bold text-lg mt-2 ' >N{property?.pricePerSm} per Plot</p>
            <div className=' w-[760px] border rounded-lg mt-6 border-[#C6C5C5] p-4 ' >
                <p className=' font-Montserrat-Bold text-xl ' >{property?.name}</p>
                <p className=' font-Montserrat-Regular mt-6 ' >{property?.about}</p>
            </div>
            <div className=' w-[760px] border rounded-lg mt-6 flex border-[#C6C5C5] p-4 ' >
                <div className=' w-full ' >
                    <p className=' font-Montserrat-Bold text-xl ' >Estate Features</p>
                    {
                        property?.estateFeatures?.map((e, i) => {
                            return <>
                                <p className=' font-Montserrat-Regular mt-6 ' >{e}</p>
                            </>
                        })
                    }
                </div>
                <div className=' w-full ' >
                    <p className=' font-Montserrat-Bold text-xl ' >Property Features</p>
                    {
                        property?.propertyFeatures?.map((e, i) => {
                            return <>
                                <p className=' font-Montserrat-Regular mt-6 ' >{e}</p>
                            </>
                        })
                    }
                </div>
            </div>
            <p className=' font-Montserrat-Bold text-[15px] mt-6' style={{ textTransform: "capitalize" }} >{property?.name}</p>
            <div className=' w-[860px] border rounded-lg  pb-8 flex flex-col border-[#C6C5C5] p-1 ' >
                <p className=' font-Montserrat-Regular text-[#038566] ml-auto mr-6' >{property?.plotLayout?.length} Plots</p>
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