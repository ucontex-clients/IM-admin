import React from 'react'
import { BASEURL } from '../../../BasicUrl/Url'
import * as axios from 'axios'   
import { getCookie } from 'cookies-next'
import { HiEye, HiEyeOff} from "react-icons/hi";
import Modal from '../../../components/modal';

export default function Index() {

    const [passWord, setPassWord] = React.useState(''); 
    const [loading, setLoading] = React.useState(false)
    const [showPassWord, setShowPassWord] = React.useState(false); 
    const [newPassWord, setNewPassWord] = React.useState(''); 
    const [showNewPassWord, setShowNewPassWord] = React.useState(false); 
    const [retypePassWord, setRetypePassWord] = React.useState(''); 
    const [showRetypePassWord, setShowRetypePassWord] = React.useState(false); 
    const [modal, setModal] = React.useState(0); 
    const [message, setMessage] = React.useState('');

    const submit = async ( ) => {  
        setLoading(true)
        
        try {   
            const request = await axios.default.patch(`${BASEURL.URL}/auth/admin-change-password`, {   
                "oldPassword": passWord,
                "newPassword": newPassWord,
                "confirmNewPassword": retypePassWord
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
        <div className=' w-full py-12 px-16 ' >
            <Modal message={message} modal={modal} />
            <p style={{color: "#0984D6"}} className=" font-Inter-Bold"  >Change Password</p>
            <div style={{ width: "500px"}} className="mt-10 flex flex-col" > 
                <p  style={{color: "#000"}} className=" font-Inter-Bold" >Old Password</p>
                <div className=' w-full relative mt-2  font-Inter-Medium' > 
                    <input onChange={(e)=> setPassWord(e.target.value)} type={showPassWord ? "text": "password"}  style={{color: "#000"}} className=' w-full h-12 border px-6 border-[#D4D4D4] rounded-md ' placeholder='Enter password ' />
                    <button onClick={()=>  setShowPassWord((prev)=> !prev ) } className=' absolute right-0 px-3 top-0 h-full flex justify-center items-center ' > 
                        {showPassWord ? 
                            <HiEye size={25} />:
                            <HiEyeOff size={25} />
                        }
                    </button>
                </div>
                <p  style={{color: "#000"}} className="mt-5" >New Password</p>
                <div className=' w-full relative mt-2 font-Inter-Medium ' > 
                    <input onChange={(e)=> setNewPassWord(e.target.value)} type={showNewPassWord ? "text": "password"}  style={{color: "#000"}} className=' w-full h-12 border px-6 border-[#D4D4D4] rounded-md ' placeholder='Enter password ' />
                    <button onClick={()=>  setShowNewPassWord((prev)=> !prev ) } className=' absolute right-0 px-3 top-0 h-full flex justify-center items-center ' > 
                        {showNewPassWord ? 
                            <HiEye size={25} />:
                            <HiEyeOff size={25} />
                        }
                    </button>
                </div> 
                <p  style={{color: "#000"}} className="mt-5" >Re-type new password</p>
                <div className=' w-full relative mt-2 font-Inter-Medium ' > 
                    <input onChange={(e)=> setRetypePassWord(e.target.value)} type={showRetypePassWord ? "text": "password"}  style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#000"}} className=' w-full h-12 border px-6 border-[#D4D4D4] rounded-md ' placeholder='Enter password ' />
                    <button onClick={()=>  setShowRetypePassWord((prev)=> !prev ) } className=' absolute right-0 px-3 top-0 h-full flex justify-center items-center ' > 
                        {showRetypePassWord ? 
                            <HiEye size={25} />:
                            <HiEyeOff size={25} />
                        }
                    </button>
                </div> 
                <button onClick={submit} style={{ color: "#fff"}}  className=' w-64 rounded-md bg-[#0984D6] font-Inter-Bold text-white mt-8 mx-auto h-12 ' >{loading ? 'loading..':'Save'}</button>
            </div>
        </div>
    )
}