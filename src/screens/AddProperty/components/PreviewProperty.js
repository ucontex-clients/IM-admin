import React from 'react'
import { Input, Select, Textarea } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Right from '../../../assests/images/icons/right.png'
import Back from '../../../assests/images/icons/Back.png'

export default function PreviewProperty() {

    const navigate = useNavigate()

    return (
        <div className=' w-full relative ' >
            
            <div className=' w-full h-[360px]  flex  ' >
                <div className=' w-full h-full mr-4 ' >
                    <div className=' bg-red-800 rounded-lg w-full h-full ' >

                    </div>
                </div>
                <div className=' w-fit block ' >
                    <div className=' flex' > 
                        <div className=' bg-red-800 rounded-lg w-[169px] mr-4 h-full ' >

                        </div>
                        <div className=' bg-red-800 rounded-lg w-[169px] h-full ' >

                        </div>
                    </div> 
                </div>
            </div>  
        </div>
    )
} 