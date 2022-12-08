import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik';
import Mail from "../../assests/images/icons/mail.png"
import Lock from "../../assests/images/icons/lock.png"
import Eye from "../../assests/images/icons/eye.png"
import { Input } from '@chakra-ui/react'
import Modal from '../../components/modal';

export default function Index() {

    const [showpassword, setShowPassword] = React.useState(false)
    const navigate = useNavigate()

    const [modal, setShowModal] = React.useState(0)
    const [message, setMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [tokenvalue, setToken] = React.useState('');
    const [url, setUrl] = useState("https://alert-battledress-boa.cyclic.app/api/admin/login");

    const loginSchema = yup.object({
        username: yup.string().required('Your email is required'),
        password: yup.string().required('Your password is required').min(4, 'A minimium of 4 characters')
    })

    // formik
    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: loginSchema,
        onSubmit: () => { },
    });


    const submit = async () => {

        setLoading(true);
        if (!formik.dirty) {
            //   alert('You have to fill in th form to continue');
            setMessage('Some fields are missing!!!')
            setShowModal(2)
            const t1 = setTimeout(() => {
                setShowModal(0)
                clearTimeout(t1);
            }, 2000);
            setLoading(false);
            return;
        } else if (!formik.isValid) {
            setMessage('Invalid Email or Password')
            setShowModal(2)
            const t1 = setTimeout(() => {
                setShowModal(0)
                clearTimeout(t1);
            }, 2000);
            //   alert('You have to fill in the form correctly to continue');
            setLoading(false);
            return;
        } else {
            const request = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formik.values),
            });

            const json = await request.json();

            if (request.status === 200) {
                // setToken(json.data.token)
                // localStorage.setItem('token', json.data.token)
                localStorage.setItem('email', formik.values.companyEmail)
                // sessionStorage.setItem('token', json.data.token)
                // console.log(json.data.token)
                // const t1 = setTimeout(() => { 
                //     navigate('/dashboard');  
                //     clearTimeout(t1);
                // }, 1000);      
                setMessage('Login successful')
                setShowModal(1)
                const t1 = setTimeout(() => {
                    setShowModal(0)
                    if (localStorage.getItem("current")) {
                        navigate(localStorage.getItem("current") + "");
                    } else {
                        navigate('/dashboard');
                    }
                    clearTimeout(t1);
                }, 2000);
            } else {
                setMessage(json.message)
                setShowModal(2)
                const t1 = setTimeout(() => {
                    setShowModal(0)
                    navigate('/');
                    clearTimeout(t1);
                }, 2000);
                setLoading(false);
            }
        }
    };


    return (
        <div className=' w-full flex flex-col justify-center items-center h-screen ' >
            <Modal message={message} modal={modal} />
            <div className=' w-[400px] ' >
                <p className=' font-Montserrat-Medium' >Login</p>
                <div className=' mt-6 relative h-[45px] ' >
                    <Input
                        name="username"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("text", true, true)
                        }
                        paddingLeft="40px" border="1px solid #C6C5C5" height="45px" placeholder='Enter Username' />
                    <img src={Mail} alt="mail" className=' w-5 absolute top-[13px] left-3 ' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.email && formik.errors.email && (
                            <motion.p
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs font-Inter-SemiBold text-[#ff0000]"
                            >
                                {formik.errors.email}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className=' mt-8 relative h-[45px] ' >
                    <Input
                        name="password"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("password", true, true)
                        }
                        type={showpassword ? "text" : "password"} paddingLeft="40px" paddingRight="40px" border="1px solid #C6C5C5" height="45px" placeholder='Enter Password' />
                    <img src={Lock} alt="Lock" className=' w-5 absolute top-[11px] left-3 ' />
                    <img style={{ cursor: "pointer" }} src={Eye} alt="maiEyel" onClick={() => setShowPassword((prev) => !prev)} className=' w-6 absolute top-[13px] right-3 cursor-pointer ' />
                </div>
                <div className="w-full h-auto pt-2">
                    {formik.touched.password && formik.errors.password && (
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-xs font-Inter-SemiBold text-[#ff0000]"
                        >
                            {formik.errors.password}
                        </motion.p>
                    )}
                </div>
                <button onClick={submit} className=' w-[400px] mx-auto mt-14 text-white  bg-[#FF1212] h-[45px] rounded-lg font-Montserrat-Bold ' >
                    {loading ? "Loading"
                        : "Login"
                    }
                </button>
            </div>
        </div>
    )
} 