import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import React from 'react' 
import { BASEURL } from '../../../BasicUrl/Url'
import * as axios from 'axios'    
import Modal from '../../../components/modal';

export default function Index() {

    const [tab, setTab] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState('');
    const [showDelete, setshowDelete] = React.useState(false)
    const [indexID, setIndex] = React.useState('');
    const [modal, setModal] = React.useState(0); 
    const [ selectedFiles, setSelectedFiles ] = React.useState([]);
    const [ imageFiles, setImageFiles ] = React.useState([]);  

	const handleImageChange = (e) => {  
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file)); 
            const fileName = Array.from(e.target.files).map((file) => file);  

            setImageFiles((prevImages) => prevImages.concat(fileName));
			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file ) => URL.revokeObjectURL(file) // avoid memory leak
			);
        } 
    };  
    

    // const { isLoading, data, refetch } = useQuery(['banner'], () =>
    //     fetch(`${BASEURL.URL}/settings/banner`, {
    //         method: 'GET', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json', 
    //             Authorization : `Bearer ${getCookie("token")}`
    //         }
    //     }).then(res =>
    //         res.json()
    //     )
    // )   

    // console.log(data);
    


    const submit = async ( ) => {  
        setLoading(true)
        // try { 
        //     let formData = new FormData()  
        //     imageFiles.map((items)=> {
        //         return(
        //             formData.append('images', items) 
        //         )
        //     })    
    
        //     const request = await axios.default.post(`${BASEURL.URL}/settings/banner`, formData, {
        //         headers: { 'content-type': 'application/json', 
        //         Authorization : `Bearer ${getCookie("token")}`
        //     }})    
        //     setMessage(request.data.status)
        //     setModal(1)  
        //     refetch()
        //     const t1 = setTimeout(() => {
        //     //   router.push("/dashboard");
        //         setModal(0)     
        //         setLoading(false)  
        //         clearTimeout(t1); 
        //     }, 2000);  
        //     console.log(request);
             
            
        // } catch (error) {  
        //     console.log(error.response.statusText);
            
        //     setMessage(error.response.statusText)
        //     setModal(2)           
        //     const t1 = setTimeout(() => {  
        //         setModal(0)     
        //         setLoading(false)  
        //         clearTimeout(t1);
        //     }, 2000); 
        //     return error
        // } 
        setLoading(false) 
    } 



    const [deleteModal, setDeleteModal] = React.useState(false)
    const DeleteHandler =async(index)=> {
        await fetch(`${BASEURL.URL}/settings/banner/${index}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}` 
            }, 
        });

        // refetch()
        setDeleteModal(false)
        // {DeleteTank(index)}
    }

    const ClickHandler =(item)=> {
        if(indexID !== item ){ 
            setIndex(item)
        } else { 
            setIndex("")
        }
    }

    return (
        <div>
            <Modal message={message} modal={modal} />
            <div className=' font-Montserrat-SemiBold flex items-center my-6 ' > 
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: { }} className={tab === 0 ? ' w-32 mr-4  ' : ' w-32 mr-4 border-opacity-50'} >
                    <p >Add Image</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {}} className={tab === 1 ? ' w-32 mx-4  ' : ' w-32 mx-4 border-opacity-50'} >
                    <p >All Images</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {}} className={tab === 2 ? ' w-36 mx-4 ' : ' w-36 mx-4 border-opacity-50'} >
                    <p >Remove Image </p>
                </button>
            </div>
            <div className=' w-full p-6 py-8 h-full border border-black rounded-md  ' >

                {tab === 0 && 
                    <div className=' w-fit font-Inter-Medium ' > 
                        <p >Upload Photo </p>
                        <input className=' font-Inter-Medium border border-black rounded-md w-[600px] h-12 py-2 px-4 mt-2 mb-6 '  type="file" multiple onChange={handleImageChange} />
                        
                        <div className='grid font-Inter-Medium grid-cols-4 mb-4 pb-4 px-2 gap-4 flex-1 overflow-x-auto mt-5' > 
                            {selectedFiles && (
                                <>
                                    {selectedFiles.map((item, index) =>{ 
                                        return(  
                                            <div key={index}  className=' w-44 mr-3 text-sm ' > 
                                                <div className=' w-44 h-32 mb-4 ' >

                                                    <img src={item} alt='files' className='w-full h-full rounded-md object-cover' />
                                                </div>
                                                <p >Ima banner </p>
                                                {/* <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p> */}
                                            </div>
                                            // <div key={index} className='w-16 h-12 pr-3 rounded-md' >
                                            //     <img src={item} alt='files' className='w-full h-full rounded-md object-cover' />
                                            // </div>
                                        ) 
                                    })}
                                </>
                            )}
                        </div> 
                        <button onClick={()=> submit()} className=' w-36 h-11 mt-12 text-white rounded-md bg-[#0984D6]  '  >{loading ? 'loading..':'Delete'}</button>
                    </div>
                }
                {tab === 1 && 
                <div className='grid font-Inter-Medium grid-cols-4 mb-4 pb-4 px-2 gap-4 flex-1 overflow-x-auto mt-5' > 
                            {/* {!isLoading && (
                                <>
                                    {data?.data?.banner.map((item, index) =>{ 
                                        return(  
                                            <div key={index}  className=' w-44 mr-3 text-sm ' > 
                                                <div className=' w-44 h-32 mb-4 ' > 
                                                    <img src={item.imagesURLs[0]} alt='files' className='w-full h-full rounded-md object-cover' />
                                                </div>
                                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >{new Date(item.createdAt).toUTCString()}</p>
                                            </div> 
                                        ) 
                                    })}
                                </>
                            )} */}
                        </div> 
                }

                {tab === 2 && 
                    <div className=' w-fit font-Inter-Medium ' > 
                        <p >Select the images to be deleted</p>
                         
                        <div className='grid font-Inter-Medium grid-cols-4 mb-4 pb-4 px-2 gap-4 flex-1 overflow-x-auto mt-5' > 
                            {/* {!isLoading && (
                                <>
                                    {data?.data?.banner.map((item, index) =>{ 
                                        return(  
                                            <div onClick={()=> ClickHandler(item._id)} key={index}  className=' w-48 mr-3 cursor-pointer text-sm ' > 
                                                <div className=' flex items-start ' > 
                                                    {item._id === indexID && (
                                                        <input checked={true} type="checkbox" />
                                                    )}
                                                    <div className=' w-44 h-32 ml-3 mb-4 ' > 
                                                        <img src={item.imagesURLs[0]} alt='files' className='w-full h-full rounded-md object-cover' />
                                                    </div>
                                                </div>
                                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >{new Date(item.createdAt).toUTCString()}</p>
                                            
                                            </div> 
                                        ) 
                                    })}
                                </>
                            )} */}
                        </div> 
                        {indexID && ( 
                            <button onClick={()=> setDeleteModal(true)} className=' w-36 h-11 mt-12 text-white rounded-md bg-[#FF333F]  ' >Delete</button>
                        )}
                        {deleteModal ? 
                            (
                                <>
                                    <div className="h-auto font-Inter-Medium flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"> 
                                        <div className='w-80 rounded-lg flex flex-col justify-center items-center bg-white p-8' >
                                            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z" fill="#ff0000"/>
                                                <path d="M9 9H11V17H9V9Z" fill="#ff0000"/>
                                                <path d="M13 9H15V17H13V9Z" fill="#ff0000"/>
                                            </svg>
                                            <p className=' font-Inter-Medium text-sm mt-3 text-black text-center' >Do You Want To Delete The Staff?</p>
                                            {/* <p className=' font-Inter-Medium text-xs mt-1 text-gray-400 text-center'>Note: The Storage Tank Of This Product Will Be Deleted</p> */}
                                            <div className='flex mt-8' >
                                                <button onClick={()=> setDeleteModal(false) } className=' bg-gray-400 text-white py-2 rounded mr-1 px-6 font-Inter-Bold text-sm' >Cancel</button>
                                                <button  onClick={()=> DeleteHandler(indexID)} className=' bg-[#ff0000] text-white py-2 rounded ml-1 px-6 font-Inter-Bold text-sm' >Delete</button>
                                            </div> 
                                            {/* <button onClick={()=> DeleteHandler(item._id)} ></button> */}
                                        </div>
                                    </div> 
                                    <div className="opacity-20 fixed flex flex-1 inset-0 z-40 bg-black"/>
                                </>
                            ) : null}  
                    </div>
                }
            </div>
        </div>
    )
}
