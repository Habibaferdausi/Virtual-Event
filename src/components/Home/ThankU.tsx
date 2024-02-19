import React from 'react'
import Marquee from 'react-fast-marquee'

export default function ThankU() {
  return (
    <div className="max-w-[1500px] mx-auto mb-4 lg:mb-7">
        <Marquee>
            
            <h1 className="lg:text-2xl text-lg font-semibold text-gray-800 mt- 2 mb-2">
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                     Thank You For Visit Our Website.
                    </span>
                 
            </h1>
        </Marquee>
    </div>
  )
}
