import React from 'react'
import AddSubAdmin from './AddSubAdmin'
import AllSubAdmin from './AllSubAdmin'
import BannerImage from './BannerImage'
import ChangePassword from './ChangePassword'
import styles from './index.module.css' 
import Profile from './Profile'

export default function Index() {

    const [tab, setTab] = React.useState(0)

    return(
        <div>
            <div className=' w-full flex mt-14 font-Inter-Medium '>
                <p >Listing</p>
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div>
            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className=' font-Montserrat-SemiBold ' >Profile</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className=' font-Montserrat-SemiBold ' >Add sub-admin</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 2 ? ' w-48  ' : ' w-48 border-opacity-50'} >
                    <p className=' font-Montserrat-SemiBold ' >All sub-admin</p>
                </button>
                <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 3 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className=' font-Montserrat-SemiBold ' >Change Passward</p>
                </button> 
                <button onClick={()=> setTab(4)} style={tab === 4 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 4 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className=' font-Montserrat-SemiBold ' >Banner Image</p>
                </button> 
            </div>
            {tab ===  0 && ( 
                <Profile />
            )}
            {tab ===  1 && ( 
                <AddSubAdmin />
            )}
            {tab ===  2 && ( 
                <AllSubAdmin />
            )}
            {tab ===  3 && ( 
                <ChangePassword />
            )}
            {tab ===  4 && ( 
                <BannerImage />
            )}
        </div>
    )
}
