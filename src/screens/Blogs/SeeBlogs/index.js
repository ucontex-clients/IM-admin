import React, {useState, useEffect} from "react"
// import Image from "next/image"
import styles from './index.module.css'
// import Link from "next/link"
import {BASEURL} from '../../../BasicUrl/Url'
import { getCookie } from "cookies-next"
// const axios = require('axios')
import {FaUserTie} from "react-icons/fa"
import {AiTwotoneCalendar} from "react-icons/ai"


export function SeeBlogs({title, body, addedBy, date, blogID, setTouchedBlog, touchedBlog}){


    const deletePost = async() => {
        const token = getCookie('token')
    // const deleteResponse = await axios.delete(`${BASEURL.URL}/blogs/${blogID}`, {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })
    }

    
    return(
        <div className={styles.mainWrapper}>
            <div onClick={()=> {
                deletePost()
                setTouchedBlog((prevState) => !prevState)
            }}>
                {/* <Image src='/images/remove.png' width={11.67} height={15} alt='trash' style={{cursor:'pointer'}}/> */}
                </div>
            <div className={styles.rightContainer} style={{alignItems:'center'}}>
            <div className={styles.imageSection}>
                <div className={styles.blogImageWrapper}>
                    {/* <Image src='/images/blogImage.png' width={280} height={249} alt='blog-cover'/> */}
                </div>
                <div className={styles.blogBottom}>
                    <div className={styles.adminSide}>
                        <FaUserTie width={13} height={14} style={{color:'red'}}/>
                        <p>{addedBy}</p>
                    </div>
                    <p>{title}</p>
                    <hr/>
                    <div className={styles.dateSide} style={{marginBlock:'10px'}}>
                        <AiTwotoneCalendar width={12} height={12} style={{color:'red'}}/>
                        <p>{date.slice(0,10)}</p>
                    </div>
                </div>
            </div>
            <p className={styles.text}>
            {body}
            {/* <Link href="/first">
                <span>READ MORE</span>
            </Link> */}
            </p>
            </div>
        </div>
    )
}