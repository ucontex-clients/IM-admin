import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import im1 from '../../assests/images/im1.jpg'
import im2 from '../../assests/images/im2.jpg'
import im3 from '../../assests/images/im3.jpg'
import im4 from '../../assests/images/im4.jpg'

// import required modules
import { Pagination, Navigation } from 'swiper'

export default function PropertySwiper() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={im1} alt="property-image" />{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src={im2} alt="property-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={im3} alt="property-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={im4} alt="property-image" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
