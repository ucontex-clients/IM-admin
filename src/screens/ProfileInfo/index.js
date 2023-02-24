import React from 'react'
import Back from '../../assests/images/icons/Back.png'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout'

export default function Index() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className=" w-full flex flex-col ">
        <div className=" w-full flex items-center justify-between ">
          <div className=" flex items-center ">
            <button onClick={() => navigate(-1)} className=" mr-3 ">
              <img src={Back} alt="back" className=" " />
            </button>
            <p className=" font-Inter-Medium text-lg ">Customer - John Doe</p>
          </div>
          <button className=" bg-[#FF1212] w-[199px] h-[40px] rounded-full text-white ">
            Buy Property
          </button>
        </div>
        <div className=" w-full mt-6 grid grid-cols-3 h-full  gap-6 ">
          <div className=" w-full rounded-md p-5 border ">
            <p className=" font-Inter-Medium text-[#6C6C6C] ">Profile</p>
            <div className=" pt-6 w-full flex flex-col items-center ">
              <div className=" w-24 h-24 rounded-full bg-green-600 "></div>
              <p className=" mt-2 font-Inter-SemiBold text-lg ">John Doe</p>
              <p className=" mt-2 font-Inter-Medium text-sm text-[#6C6C6C] ">
                john123
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                IM-234098909
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                Johndoe@example.com
              </p>
            </div>
          </div>
          <div className=" w-full rounded-md p-5 border ">
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                Gender:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">Male</p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                DOB:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                Jun - 20- 1978{' '}
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                Phone 1:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                08056781232
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                Phone 2:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                08056781232
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                Occupation:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                Trading
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                Country:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                Nigeria
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                State:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                Rivers
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                City:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                Port Harcourt
              </p>
            </div>
            <div className=" w-full flex items-center my-4 ">
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] w-24 ">
                Address:
              </p>
              <p className=" font-Inter-Medium text-sm text-[#6C6C6C] ">
                22 Kime Street
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
