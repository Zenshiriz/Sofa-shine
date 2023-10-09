import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {BsShield} from "react-icons/bs"
import {RiHeadphoneFill} from "react-icons/ri"
import {CiDeliveryTruck} from "react-icons/ci"
import data from "../sofaData"
export default function FurnitureDatails() {
    const params = useParams()
    const filteredData = data.data.filter(data => data.name === params.id)
    const filteredDataEl = filteredData.map(filteredData => (
      <>
      <div className='pt-16 md:pt-20 md:flex'>
       <div key={filteredData.id} className='flex justify-center md:w-[50vw]'>
        <img src={filteredData.img} loading='lazy' className=' w-[90%] shadow max-w-[520px]' alt="" />
      </div>
      <div className=' px-6 py-6 md:max-w-[340px] lg:max-w-[540px] '>
        <p className=' font-Poppins uppercase font-bold text-lg md:text-2xl'>{filteredData.name}</p>
        <p className=' font-Poppins uppercase text-base md:text-xl'>₹ {filteredData.price}</p>
        <hr className=' text-gray-200 h-[2px] my-4'/>
        <p className=' font-Poppins text-base'>{filteredData.description}</p>
        <hr className=' text-gray-200 h-[2px] my-4'/>
        <div className='flex gap-5 mb-5'>
          <button className=' bg-gray-900 text-white py-3 px-4 w-full h-full text-sm uppercase outline outline-2 outline-gray-900 hover:bg-white hover:text-gray-900 transition ease-in-out duration-150'>
           call now 
          </button>
          <button className=' bg-transparent text-gray-900 py-3 px-4 w-full text-sm uppercase outline outline-2 hover:bg-gray-900 hover:text-white hover:outline-gray-900 transition ease-in-out duration-150'>
           email
          </button>
        </div>
        <p className=' font-Poppins leading-tight'>available for orders up to ₹{filteredData.price}</p>
        <p className=' font-Poppins leading-tight'>stocks available</p>
       
      </div>
     
      </div>
       <div className='flex flex-col md:flex-row gap-y-4 my-3 md:gap-x-4 md:justify-between md:px-4 md:py-4'>
       <div className='flex flex-col items-center'>
         <BsShield className='text-3xl'/>
         <p className='font-poppins'>2-year warranty as standard</p>
       </div>
       <div className='flex flex-col items-center'>
         <RiHeadphoneFill className=' text-3xl'/>
         <p className='font-poppins'>talk to us</p>
       </div>
       <div className='flex flex-col items-center'>
         <CiDeliveryTruck className=' text-3xl'/>
         <p className='font-poppins'>delivery all over mangalore</p>
       </div>
     </div>
     </>
    ))
  return (
    <div className='bg-[#F0F8FF]'>
     {filteredDataEl}
    </div>
  )
}
