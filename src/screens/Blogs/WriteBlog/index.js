import React, { useState, useRef } from "react";
import Image from 'next/image'
import styles from './index.module.css'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
import {BASEURL} from '../../../BasicUrl/Url'
import { getCookie } from "cookies-next";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const axios = require('axios')

export function WriteBlog(){
    const dropPhoto = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    const [blogData, setBlogData] = useState({title:'', image:'', data:''})

    const handleBlogChange = (e) => {
        if (e.target.name == 'pics'){
            setBlogData(prevData => {
                return {...prevData, image:e.target.files}
            })
        }else{
            setBlogData(prevData => {
                return {...prevData, [e.target.name]:e.target.value}
            })
        }
    }

    const takePhoto = () => {
        dropPhoto.current.click()
    }

const handleClick = async () => {
    const token = getCookie('token')
    console.log(token)
    const str1 = value.replace('<p>', '')
    const str2 = str1.replace('</p>', '')
    blogData.data = str2
    const formData = new FormData()
    formData.append('title', blogData.title)
    formData.append('body', blogData.data)
    formData.append('image', blogData.image)
    const postBlogResponse = await axios.post(`${BASEURL.URL}/blogs`, formData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}




    return(
        <div>
            <div style={{marginTop:'48px'}}>
                <p>Blog <span style={{marginLeft:'50px', fontSize:'16px', color:'#101010'}}>Write Post</span></p>
                <input type='text' placeholder='Search by name'></input>
            </div>

            <div style={{marginTop: '82px', paddingInline:'25px 159px', cursor:'pointer'}}>
                <input type='text' placeholder='Post Title' required name='title'
                 onChange={handleBlogChange}></input>
                <div  onClick={takePhoto}>
                    {/* <Image src='/images/upload.png' width={55.6} height={50} alt='upload' /> */}
                    <p >Drop file here or click to upload</p>
                    <p >Video: MP4 or PNG, JPEG, JPG</p>
                    <input type='file' style={{display:'none'}} ref={dropPhoto} 
                    name='pics' onChange={handleBlogChange}></input>
                </div>
                <div >
                    <ReactQuill value={value} onChange={setValue} />
                </div>
                <div ><button onClick={handleClick}>Preview</button></div>
            </div>
        </div>
    )
}