import React, { useEffect, useState } from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import Add from '../../../assests/images/icons/addp.png';
import axios from 'axios';
import Modal from '../../../components/modal';

export default function PropertyLayout(props) {
    let price = +localStorage.getItem("pricePerSm");
    let propertyId = localStorage.getItem("propertyId");
    let [length, setLength] = useState(1);
    let [width, setWidth] = useState(1);
    let [cost, setCost] = useState(false);
    let [layout, setLayout] = useState([]);
    let [layoutMap, setLayoutMap] = useState([]);
    const [modal, setShowModal] = React.useState(0)
    const [message, setMessage] = React.useState('');

    useEffect(() => {
        setLayoutMap(JSON.parse(localStorage.getItem("layout")))
    }, [])
    let createLayout = async () => {
        let data = {
            width: +width,
            length: +length,
            color: "red"
        };
        let url = "https://im-property.herokuapp.com/api/property/addplot/" + propertyId;


        await axios.put(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzlkZWNkZWZiY2RmNWM4ZDM5YTdmYzUiLCJyb2xlIjoibm9ybWFsQWRtaW4iLCJpYXQiOjE2NzM3MzQ1MTAsImV4cCI6MTY3NjMyNjUxMH0.lXjavQVqwEGTML2mEfinKM9fIBJeEaEOB6yHTSJxq20`
            }
        })
            .then(res => {
                // console.log(res)
            })

        let obj = {
            "area": length * width,
            "price": Math.round(price * length * width * 10) / 10,
            "width": width,
            "length": length,
            "color": "red"
        };
        layout.push(obj)
        localStorage.setItem("layout", JSON.stringify(layout))
        setLength(1)
        setWidth(1)
        getProperty()
        setMessage('Plot added')
        setShowModal(2)
        const t1 = setTimeout(() => {
            setShowModal(0)
            clearTimeout(t1);
        }, 2000);
    };
    let getProperty = () => {
        setLayoutMap(JSON.parse(localStorage.getItem("layout")))
    };
    let nextPage = () => {
        props.next(true);
        props.load()
    }
    return (
        <div className=' w-full flex flex-col ' >
            <Modal message={message} modal={modal} />
            <div className=' w-full flex ' >
                <div className=' w-full mr-3 overflow-y-auto flex flex-col font-Montserrat-Medium mt-4 p-6 pb-12 border rounded-lg ' >
                    <p className=' my-6 font-Montserrat-Bold text-xl ' >About Property Info</p>
                    {/* <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Upload Layout Photo</p>
                    <Input type="file" paddingTop="7px" height="45px" border=" 1px solid #000 " /> */}
                    <div className=' w-full mt-3 border border-[#000000] rounded-md p-6 ' >
                        <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >New Plot</p>
                        <p className=' text-[15px] my-6 font-Inter-Regular' >Measurement</p>
                        <div className=' w-full flex ' >
                            <div className=' w-full mr-4 ' >
                                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Length</p>
                                <Input value={length} onChange={(e) => setLength(e.target.value)} placeholder='30' height="45px" border=" 1px solid #000" />
                            </div>
                            <div className=' w-full ' >
                                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Width</p>
                                <Input value={width} onChange={(e) => setWidth(e.target.value)} placeholder='30' height="45px" border=" 1px solid #000 " />
                            </div>
                        </div>
                        <div className=' w-full flex mt-6 ' >
                            <div className=' w-full mr-4 ' >
                                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Cost</p>
                                <button className=' w-full bg-[#C6C5C5] h-[45px] rounded-md' >{Math.round(price * length * width * 10) / 10}</button>
                            </div>
                            <div className=' w-full ' >
                            </div>
                        </div>
                        <button className=' w-full bg-[#3DB2FF] h-[45px] text-white rounded-md mt-10  font-Inter-Bold ' onClick={() => createLayout()}>Add Layout</button>
                    </div>
                    <div className=' flex items-center mt-6 ' >
                        {/* <button className=' w-[25px] h-[25px] ] rounded-full  ' >
                            <img src={Add} className=" w-full h-full object-cover " alt="add" />
                        </button> */}
                        {/* <p className=' font-Inter-Regular ml-3 ' >Add more photos</p> */}
                    </div>
                </div>

                <div className=' w-full ml-3 h-fit overflow-y-auto flex flex-col font-Montserrat-Medium mt-4 p-6 pb-12 border rounded-lg ' >
                    <p className=' my-6 font-Montserrat-Bold text-xl  ' >Property Layout Preview</p>
                    <div className=' w-full border-t border-[#C6C5C5] pt-6  '>
                        <div className=' w-full grid grid-cols-3 gap-6 ' >
                            {layoutMap?.map((e, i) => {
                                return (
                                    <div className=' w-full  flex flex-col border border-[#C6C5C5] relative rounded-md ' >
                                        <p className=' text-center font-Montserrat-Regular text-xs absolute rotate-90 -left-[10px] top-6 ' >{e.width}m</p>
                                        <p className=' text-center font-Montserrat-Regular text-xs ' >{e.length}m</p>
                                        <p className=' text-center font-Montserrat-Bold text-xs my-2 text-[#000] ' >{e.area} SQ.M</p>
                                        <p className=' text-center font-Montserrat-SemiBold text-xs text-[#3DB2FF] ' >N{e.price}</p>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => props.next(true)} className=' bg-[#3DB2FF] mx-auto w-[300px] h-[45px] mt-8 rounded-md text-white font-Inter-Bold ' >Preview</button>
        </div>
    )
} 