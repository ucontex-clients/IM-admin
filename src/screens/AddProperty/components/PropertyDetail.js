import React, { useState } from 'react'
import { Input, Select, Spinner, Textarea } from '@chakra-ui/react'
import { json, useNavigate } from 'react-router-dom'
import Add from '../../../assests/images/icons/addp.png'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';
import * as axios from 'axios';
import Modal from '../../../components/modal'

export default function PropertyDetails(props) {

    const [stateloading, setStateLoading] = React.useState(false);
    const [state, setState] = React.useState([]);
    const [modal, setShowModal] = React.useState(0)
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [addedBy, setAddedBy] = useState("638ffb8e9e6bcac32a09d4a8")

    const [show, setShow] = React.useState(true)
    const [firstImage, setFirstImage] = React.useState("")

    const [selectedFiles, setSelectedFiles] = React.useState([]);
    const [imageFiles, setImageFiles] = React.useState([]);

    const loginSchema = yup.object({
        name: yup.string().required('Required'),
        pricePerSm: yup.string().required('Required'),
        about: yup.string().required('Required'),
        propertyFeatures: yup.string().required('Required'),
        estateFeatures: yup.string().required('Required'),
        category: yup.string().required('Required'),
        state: yup.string().required('Required'),
        city: yup.string().required('Required'),
        address: yup.string().required('Required'),
        LGA: yup.string().required('Required'),
        totalPlotSize: yup.string().required('Required'),
        ticker: yup.string().required('Require'),
        // color: yup.string().required('Required'), 
    })

    // formik
    const formik = useFormik({
        initialValues: {
            name: '', about: '', propertyFeatures: '', estateFeatures: '', state: '', city: '', address: '', LGA: '', totalPlotSize: ''
            , ticker: '', category: '', pricePerSm: ''
        },
        validationSchema: loginSchema,
        onSubmit: () => { },
    });

    React.useEffect(() => {
        fetch(`https://www.universal-tutorial.com/api/getaccesstoken`, {
            method: 'GET', // or 'PUT'
            headers: {
                "Accept": "application/json",
                "api-token": "V1mhwD-iZGLntVICiPhQfxRIhGpJ1xcokq0xZiMbq9YfK2VcXy0EikVGhfxI6RH-RLE",
                "user-email": "egileoniso.ekada@gmail.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('country-token', data.auth_token)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    React.useEffect(() => {
        fetch(`https://www.universal-tutorial.com/api/states/Nigeria`, {
            method: "GET", // or 'PUT'
            headers: {
                Authorization: `Bearer ${localStorage.getItem("country-token")}`,
                Accept: "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setState(data);
                if (data.length !== 0) {
                    setStateLoading(false);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [formik.values.state]);

    const submit = async () => {

        // setLoading(true);
        if (!formik.dirty) {
            //   alert('You have to fill in th form to continue');
            setMessage('You have to fill in the form to continue')
            setShowModal(2)
            const t1 = setTimeout(() => {
                setShowModal(0)
                clearTimeout(t1);
            }, 2000);
            setLoading(false);
            return;
        } else if (!formik.isValid) {
            setMessage('You have to fill in the form to continue')
            setShowModal(2)
            const t1 = setTimeout(() => {
                setShowModal(0)
                clearTimeout(t1);
            }, 2000);
            setLoading(false);
            return;
        } else {
            let url = "https://im-property.herokuapp.com/api/property/add";

            let formData = new FormData()

            formData.append('name', formik.values.name)
            formData.append('pricePerSm', +formik.values.pricePerSm)
            formData.append('about', formik.values.about)
            formData.append('propertyFeatures', formik.values.propertyFeatures)
            formData.append('estateFeatures', formik.values.estateFeatures)
            formData.append('category', formik.values.category)
            formData.append('state', formik.values.state)
            formData.append('city', formik.values.city)
            formData.append('address', formik.values.address)
            formData.append('LGA', formik.values.LGA)
            formData.append('ticker', formik.values.ticker)
            formData.append('totalPlotSize', 3000)
            formData.append('addedBy', addedBy)
            for (let i = 0; i < imageFiles.length; i++) {
                formData.append('files', imageFiles[i]);
            }
            await fetch(url, {
                headers: {
                    "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhmZmI4ZTllNmJjYWMzMmEwOWQ0YTgiLCJyb2xlIjoibm9ybWFsQWRtaW4iLCJpYXQiOjE2NzQ5OTA5NzUsImV4cCI6MTY3NzU4Mjk3NX0.091a8E-c1jWEFgWOtaLkqyOZ-oipciWAiNT7FZpfwnE`
                },
                method: "POST",
                body: formData
            })
                .then((e) => e.json())
                .then(res => {
                    localStorage.setItem("propertyId", res._id)
                    localStorage.setItem("pricePerSm", res.pricePerSm)
                })
            props.next(true)
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            const fileName = Array.from(e.target.files).map((file) => file);

            setImageFiles((prevImages) => prevImages.concat(fileName));
            setSelectedFiles((prevImages) => prevImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file) // avoid memory leak
            );
        }
    };

    function handleRemove(id, file) {
        const newList = selectedFiles.filter((item) => item !== id);
        const clone = [...imageFiles];
        const index = clone.indexOf(file);
        clone.splice(index, 1);
        setImageFiles(clone);
        if (Object.keys(newList).length === 0) {
            setShow(prev => !prev);
        }
        setSelectedFiles(newList);
    };

    const renderPhotos = (source) => {
        return source.map((photo, index) => {
            return (
                <div key={index}>
                    {files(index, photo)}
                </div>
            )
        });
    };

    const files = (index, photo) => {
        if (index < 5) {
            return (
                <div key={index} className=' bg-secondary p-px w-40 h-40 rounded-md mx-2'  >
                    <div style={{ backgroundImage: 'url(' + photo + ')', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%', display: 'flex', backgroundPosition: 'center', borderRadius: '5px' }} >
                        <div className='w-full flex flex-1' />
                        {/* <div onClick={() => handleRemove(photo, imageFiles[index])} className=' flex justify-center items-center bg-secondary  cursor-pointer mt-1 mr-1 rounded-full' > */}
                        <svg onClick={() => handleRemove(photo, imageFiles[index])} className=' flex justify-center items-center bg-secondary  cursor-pointer mt-1 mr-1 rounded-full' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 0C6.01664 0 4.56659 0.439867 3.33323 1.26398C2.09986 2.08809 1.13856 3.25943 0.570907 4.62987C0.00324961 6.00032 -0.145275 7.50832 0.144114 8.96317C0.433503 10.418 1.14781 11.7544 2.1967 12.8033C3.2456 13.8522 4.58197 14.5665 6.03682 14.8559C7.49168 15.1453 8.99968 14.9968 10.3701 14.4291C11.7406 13.8614 12.9119 12.9001 13.736 11.6668C14.5601 10.4334 15 8.98336 15 7.5C15 5.51087 14.2098 3.60322 12.8033 2.1967C11.3968 0.790176 9.48913 0 7.5 0ZM11.25 10.3594C11.3743 10.4837 11.4442 10.6523 11.4442 10.8281C11.4442 11.0039 11.3743 11.1726 11.25 11.2969C11.1257 11.4212 10.9571 11.491 10.7813 11.491C10.6054 11.491 10.4368 11.4212 10.3125 11.2969L7.5 8.48437L4.6875 11.3062C4.62595 11.3678 4.55287 11.4166 4.47244 11.4499C4.39201 11.4833 4.30581 11.5004 4.21875 11.5004C4.1317 11.5004 4.0455 11.4833 3.96507 11.4499C3.88464 11.4166 3.81156 11.3678 3.75 11.3062C3.68845 11.2447 3.63962 11.1716 3.6063 11.0912C3.57299 11.0108 3.55584 10.9246 3.55584 10.8375C3.55584 10.7504 3.57299 10.6642 3.6063 10.5838C3.63962 10.5034 3.68845 10.4303 3.75 10.3687L6.5625 7.5375L3.67031 4.62187C3.54599 4.49755 3.47615 4.32894 3.47615 4.15312C3.47615 3.97731 3.54599 3.80869 3.67031 3.68437C3.79464 3.56005 3.96325 3.49021 4.13906 3.49021C4.31488 3.49021 4.48349 3.56005 4.60781 3.68437L7.5 6.60937L10.3922 3.71719C10.4537 3.65563 10.5268 3.6068 10.6073 3.57349C10.6877 3.54017 10.7739 3.52302 10.8609 3.52302C10.948 3.52302 11.0342 3.54017 11.1146 3.57349C11.1951 3.6068 11.2681 3.65563 11.3297 3.71719C11.3912 3.77874 11.4401 3.85182 11.4734 3.93225C11.5067 4.01268 11.5239 4.09888 11.5239 4.18594C11.5239 4.27299 11.5067 4.35919 11.4734 4.43962C11.4401 4.52005 11.3912 4.59313 11.3297 4.65469L8.4375 7.5375L11.25 10.3594Z" fill="#FF1212" />
                        </svg>
                        {/* </div>                     */}
                    </div>
                </div>
            )
        } else {
            selectedFiles.pop();
            imageFiles.pop();
        }
    };

    if (!loading) {
        return (
            <div className=' w-[600px] overflow-y-auto flex flex-col font-Montserrat-Medium mt-4 p-6 pb-12 border rounded-lg ' >
                <Modal message={message} modal={modal} />
                <p className=' my-2 font-Montserrat-Bold  ' >About Property Info</p>
                <div className='w-full' >
                    <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Name of Property</p>
                    <Input
                        name="name"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("name", true, true)
                        }
                        placeholder='Property Name' height="45px" border=" 1px solid #000 " />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.name && formik.errors.name && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                            >
                                {formik.errors.name}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className='w-full' >
                    <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Description</p>
                    <Textarea
                        name="about"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("about", true, true)
                        }
                        placeholder='Write something about the property' height="150px" border=" 1px solid #000 " />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.about && formik.errors.about && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                            >
                                {formik.errors.about}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className='w-full' >
                    <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Category</p>
                    <Input
                        name="category"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("category", true, true)
                        }
                        placeholder='Residential or Industrial' height="45px" border=" 1px solid #000 " />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.category && formik.errors.category && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                            >
                                {formik.errors.category}
                            </motion.p>
                        )}
                    </div>
                </div>
                <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Location</p>
                <div className=' flex  ' >
                    <div className=' w-full mr-4 ' >
                        <Select
                            disabled
                            placeholder='Nigeria' height="45px" border=" 1px solid #000 " />
                    </div>
                    <div className=' w-full mr-4 ' >
                        <Select
                            name="state"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("state", true, true)
                            }
                            placeholder='State' height="45px" border=" 1px solid #000 " >
                            {!stateloading ? (
                                <>
                                    {state?.map((item) => {
                                        return (
                                            <option key={item.state_name}>{item.state_name}</option>
                                        );
                                    })}
                                </>
                            ) : (
                                <>
                                    <option>loading...</option>
                                </>
                            )}
                        </Select>
                        <div className="w-full h-auto pt-2">
                            {formik.touched.state && formik.errors.state && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.state}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className=' w-full ' >
                        <Input
                            name="LGA"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("LGA", true, true)
                            }
                            placeholder='LGA' height="45px" border=" 1px solid #000 " />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.LGA && formik.errors.LGA && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.LGA}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </div>

                <div className=' flex  ' >
                    <div className=' w-full mr-4 ' >
                        <Input
                            name="city"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("city", true, true)
                            }
                            placeholder='City' height="45px" border=" 1px solid #000 " />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.city && formik.errors.city && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.city}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className=' w-full' >
                        <Input
                            name="address"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("address", true, true)
                            }
                            placeholder='Address' height="45px" border=" 1px solid #000 " />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.address && formik.errors.address && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.address}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </div>

                <div className='flex mt-5 gap-4'>
                    <div className=' w-full ' >
                        <p>Total Plot Size</p>
                        <Input
                            name="totalPlotSize"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("totalPlotSize", true, true)
                            }
                            placeholder='Total Plot Size' height="45px" border=" 1px solid #000 " />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.totalPlotSize && formik.errors.totalPlotSize && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.totalPlotSize}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className=' w-full  ' >
                        <p>Price Per Sqm</p>
                        <Input
                            name="pricePerSm"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("pricePerSm", true, true)
                            }
                            placeholder='Price per Sqm' height="45px" border=" 1px solid #000 " />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.pricePerSm && formik.errors.pricePerSm && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.pricePerSm}
                                </motion.p>
                            )}
                        </div>
                    </div>
                    <div className=' w-full  ' >
                        <p>Plot Code</p>
                        <Input
                            name="ticker"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("ticker", true, true)
                            }
                            placeholder='Plot Code' height="45px" border=" 1px solid #000 " />
                        <div className="w-full h-auto pt-2">
                            {formik.touched.ticker && formik.errors.ticker && (
                                <motion.p
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Inter-SemiBold text-[#ff0000]"
                                >
                                    {formik.errors.ticker}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </div>
                <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Property Features</p>
                <Input
                    name="propertyFeatures"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("propertyFeatures", true, true)
                    }
                    placeholder='Enter the features of the property' height="45px" border=" 1px solid #000 " />
                <div className="w-full h-auto pt-2">
                    {formik.touched.propertyFeatures && formik.errors.propertyFeatures && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#ff0000]"
                        >
                            {formik.errors.propertyFeatures}
                        </motion.p>
                    )}
                </div>


                <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Estate Features</p>
                <Input
                    name="estateFeatures"
                    onChange={formik.handleChange}
                    onFocus={() =>
                        formik.setFieldTouched("estateFeatures", true, true)
                    }
                    placeholder='Enter the features of the Estate' height="45px" border=" 1px solid #000 " />
                <div className="w-full h-auto pt-2">
                    {formik.touched.estateFeatures && formik.errors.estateFeatures && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#ff0000]"
                        >
                            {formik.errors.estateFeatures}
                        </motion.p>
                    )}
                </div>

                {/* <p className=' my-6 font-Montserrat-Bold  ' >Edit Norah’s Court Estate</p> */}
                <br />
                <p className=' text-[15px] font-Inter-SemiBold mb-2 ' >Upload Photo</p>
                {/* <Input type="file" paddingTop="7px" height="45px" border=" 1px solid #000 " name={firstImage} onChange={(e) => setFirstImage(e.target.value)} /> */}
                <p className=' text-[15px] font-Inter-Regular text-blue-500 ' >First photo would be the display photo </p>
                <div className=' flex items-center mt-6 ' >
                    <label className=' w-[25px] h-[25px] ] rounded-full  ' >
                        <img src={Add} className=" w-full h-full object-cover " alt="add" />
                        <input style={{ display: 'none', width: '100%', height: '100%' }} type="file" id="file" multiple onChange={handleImageChange} />
                    </label>
                    <p className=' font-Inter-Regular ml-3 ' >Add more photos</p>
                </div>
                <div className=' flex w-full overflow-x-auto ' >
                    {renderPhotos(selectedFiles)}
                </div>
                {/* <p className=' text-[15px] mt-6 font-Inter-SemiBold mb-2 ' >Upload Video</p>
                <Input type="file" paddingTop="7px" placeholder='' height="45px" border=" 1px solid #000 " /> */}
                <button onClick={() => submit()} className=' bg-[#3DB2FF] mx-auto w-[300px] h-10 mt-8 rounded-md text-white font-Inter-Bold ' >Next</button>
            </div>
        )
    };

    if (loading) {
        <div className=' w-full flex justify-center ' >
            <Spinner size="lg" />
        </div>
    };
} 