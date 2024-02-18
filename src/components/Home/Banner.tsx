"use client";
import React from 'react'
import Lottie from 'lottie-react'

import bannerAni from "../../../public/virtual.json";

export default function Banner() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
    <div className="mb-10 mt-3 px-5">
      <div className=" flex ps-3 lg:ps-1  justify-between lg:pt-10 ">
        <div className="lg:mt-10  pt-6 text-start ">
          

          <h1 className="lg:text-[35px] md:text-[22px] text-[13px] font-bold  mt-2  lg:mt-2  text-blue-400 ">
          Crafting Memorable Experiences:
          </h1>
          <h2 className="lg:text-[55px] md:text-[25px] text-[13px] font-bold pt-2    text-purple-500">
          Your Virtual Event Space
          </h2>

          <p className=" hidden  lg:block md:block md:mt-8 text-lg font-semibold text-black mt-5 mb-6">
          Transforming Virtual Gatherings into Unforgettable Experiences:<br/> Your Premier Destination for Engaging Events and Connections
          </p>

        </div>

        {/* animation part */}

        <div className="">
          <Lottie
            animationData={bannerAni}
            loop={true}
            className='lg:h-[500px] h-[100px] lg:me-10 lg:pe-6'
          
          />
        </div>
      </div>
    </div>
  </div>
  )
}
