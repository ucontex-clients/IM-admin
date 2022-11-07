import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ click, id,img, user, amount, lasted, date}:
    {click: any,img:string, id:string, user:string, amount:string, date:string, lasted:string}){
    return(
        <ul className={styles.userData}>

            <li style={{display:'flex', alignItems:'center'}}>
                <input type='checkbox' style={{marginRight:'10px'}}></input>
                <div style={{marginRight:'5px'}}>
                    <p style={{fontSize:'12px'}}>{id}</p>
                </div> 
            </li>

            <li style={{display:'flex', alignItems:'center'}}>
                {/* <input type='checkbox' style={{marginRight:'10px'}}></input> */}
                <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'999px'}}>
                    <div className=" w-fit h-fit " ><img src={img} className="w-12 h-12" alt='avatar' style={{borderRadius:'999px'}}/></div>
                </div>
                <div className=" ml-1" >
                    <p style={{fontSize:'12px'}}>{user}</p>
                    {/* <p style={{fontSize:'12px', color:'#90A0B7'}}>{useremail}</p> */}
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{amount}</p>
            </li>  

            <li>
                <p style={{fontSize:'12px'}} >{lasted}</p>
            </li> 

            <li>
                <p style={{fontSize:'12px'}}>Verified Agent</p>
            </li> 
 
            <li>
                <div className=" flex w-full justify-center " > 
                    <button onClick={()=> click.click(true)} className={styles.viewButton}>History</button> 
                    <button className="ml-5" > 
                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                    </button> 
                </div>
            </li>
        </ul>
    )
}