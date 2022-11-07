import React from 'react'
import { BASEURL } from '../../../BasicUrl/Url'
import * as axios from 'axios'   
import { getCookie } from 'cookies-next'
import Modal from '../../../components/modal';
import { HiEye, HiEyeOff} from "react-icons/hi";

export default function Index() { 
     
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [passWord, setPassWord] = React.useState(''); 
    const [showPassWord, setShowPassWord] = React.useState(false); 
    const [modal, setModal] = React.useState(0); 
    const submit = async ( ) => {  
        setLoading(true)
        let formData = new FormData()  
        formData.append('email', email) 
        formData.append('password', passWord) 
        try {   
            const request = await axios.default.post(`${BASEURL.URL}/settings/add-subadmin`, { 
                "email": email,
                "password": passWord
            }, {
                headers: { 'content-type': 'application/json', 
                Authorization : `Bearer ${getCookie("token")}`
            }})    
            setMessage(request.data.status)
            setModal(1)   
            const t1 = setTimeout(() => {
            //   router.push("/dashboard");
                setModal(0)     
                setLoading(false)  
                clearTimeout(t1); 
            }, 2000);  
            console.log(request);
             
            
        } catch (error) {  
            console.log(error.response.statusText);
            
            setMessage(error.response.statusText)
            setModal(2)           
            const t1 = setTimeout(() => {  
                setModal(0)     
                setLoading(false)  
                clearTimeout(t1);
            }, 2000); 
            return error
        } 
        setLoading(false) 
    } 

    return (
        <div className=' w-full  font-Inter-Bold py-12 px-16 ' >
            <Modal message={message} modal={modal} />
            <p style={{ color: "#0984D6"}} >Add sub-admin</p>
            <div style={{ width: "500px"}} className="mt-10 flex flex-col" > 
                <p  style={{ color: "#000"}} className=" font-Inter-Medium" >Email Address</p>
                <input onChange={(e)=> setEmail(e.target.value)} style={{ color: "#000"}} className=' w-full  font-Inter-Medium h-12 border px-6 mt-2 border-[#D4D4D4] rounded-md ' placeholder='Enter the email ' />
                <p  style={{ color: "#000"}} className="mt-5  font-Inter-Medium" >Password</p>
                <div className=' w-full relative mt-2  font-Inter-Medium' > 
                    <input onChange={(e)=> setPassWord(e.target.value)} type={showPassWord ? "text": "password"}  style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#000"}} className=' w-full h-12 border px-6 border-[#D4D4D4] rounded-md ' placeholder='Enter password ' />
                    <button onClick={()=>  setShowPassWord((prev)=> !prev ) } className=' absolute right-0 px-3 top-0 h-full flex justify-center items-center ' > 
                        {showPassWord ? 
                        <HiEye size={25} />:
                        <HiEyeOff size={25} />
                        }
                    </button>
                </div>
                <button onClick={submit}  style={{ color: "#fff"}}  className=' w-64 rounded-md bg-[#0984D6] text-white mt-8 mx-auto h-12 ' >{loading ? 'loading..':'Add Sub-Admin'}</button>
            </div>
        </div>
    )
}
