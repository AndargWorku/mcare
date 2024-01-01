import React from 'react'
import { Pagination } from 'swiper';
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import patientAvatar from "../../assets/images/patient-avatar.png"
import {HiStar} from "react-icons/hi"

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
        <Swiper module={[Pagination]} spaceBetween={30} slidesPreview={1} pagination={{clickable:true}}
        breakpoints={{
            640:{
                slidesPreview:1,
                spaceBetween:0,
            },
            768:{
                slidesPreview:2,
                spaceBetween:20

            },
            1024:{
                slidesPreview:3,
                spaceBetween:30,
            },
        }}>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt=""/>

                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Andarg Worku

                    </h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                    
                   </div>
                   </div>
                   <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I have taken Medical Services from them,they treat so well and they are providing the best medical services

                   </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt=""/>

                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Andarg Worku

                    </h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                    
                   </div>
                   </div>
                   <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I have taken Medical Services from them,they treat so well and they are providing the best medical services

                   </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-[30px] px-5 rounded-3">
                    <div className="flex items-center gap-[13px]">
                        <img src={patientAvatar} alt=""/>

                    <div>
                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                        Andarg Worku

                    </h4>
                    <div className="flex items-center gap-[2px]">
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                        <HiStar className="text-yellowColor w-[18px] h-5" />
                    </div>
                    
                   </div>
                   </div>
                   <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                    I have taken Medical Services from them,they treat so well and they are providing the best medical services

                   </p>
                </div>
            </SwiperSlide>

        </Swiper>
      
    </div>
  )
}

export default Testimonial
