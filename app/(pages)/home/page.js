import React from 'react'
import Nav from "../../(pages)/nav/page"
import Image from 'next/image'
import Nicola from "../../img/nicola (1).jpeg"
export default function home() {
  return (
    <div className=''>
      <Nav/>
      <div className="home bg-gray-300 px-4 pt-8 sm:grid sm:grid-cols-2 pb-4 "id='opacity'>
        <div className="left-text">
        <div className="text ">
          <p>WEB DEVELOPER</p>
          <p className='capitalize text-3xl'>hello, it's</p>
          <p className='capitalize text-3xl'>nicola goodman</p>
        </div>
        <div className="text">
          <p className=''>I help construction companies build their online credibility by designing and developing websites</p>
        </div>
        </div>
        <div className="right-text  flex justify-center items-center">
          <div className="image_here sm:border bg-gray-200">
            <div className="image_here_extra_border sm:border  mt-4 sm:px-12 sm:py-12 bg-gray-200">
            <Image alt='' src={Nicola} className='  w-96 h-fit rounded-lg'></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
