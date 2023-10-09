import React from "react";
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CgTwitter} from 'react-icons/cg'
import {MdLocationOn , MdEmail, MdLocalPhone} from 'react-icons/md'
export default function Footer() {
  return (
    <footer className=" bg-[#D1D5DB] pt-10 px-6 lg:px-10">
      <div className=" md:flex md:justify-between">
      <div className=" font-Poppins text-gray-900 uppercase text-2xl lg:text-4xl">
        <p>luxuries</p>
        <p>magnificent</p>
        <p>sofa’s & furniture.</p>
      </div>
      <div className="lg:pr-10">
      <div className="py-6 md:py-0 md:mb-6 md:flex gap-x-12 md:text-xl">
        <p className=" flex items-center gap-1 text-gray-900 font-Poppins"><BiLogoFacebook/>facebook</p>
        <p className=" flex items-center gap-1 text-gray-900 font-Poppins"><AiOutlineInstagram/>instagram</p>
        <p className=" flex items-center gap-1 text-gray-900 font-Poppins"><CgTwitter/>twitter</p>
      </div>
      <div className=" flex justify-between pb-6  md:space-x-28">
        <div className="md:flex md:text-lg md:gap-x-11 ">
        <p className=" flex items-center md:items-start gap-1 text-gray-900 font-Poppins"><MdLocationOn/>krishnapura, <br className=" hidden md:block" /> 
mangalore</p>
<div className="md:">
        <p className=" flex items-center gap-1 text-gray-900 font-Poppins"><MdEmail/>sofashine@gmail.com</p>
        <p className=" flex items-center gap-1 text-gray-900 font-Poppins"><MdLocalPhone/>9844235429</p>
</div>
        </div>
        <div className="">
          <p className=" text-gray-900 cursor-pointer font-Poppins">contact</p>
          <p className=" text-gray-900 cursor-pointer font-Poppins">about</p>
        </div>
        </div>
      </div>
      </div>
      <div className=" mt-12 pb-2">
        <p className=" font-Rubik font-bold uppercase w-full h-full text-[60px] md:text-[125px] lg:text-[175px] text-center leading-none">Sofa shine</p>
        <div className="flex justify-between text-gray-900 font-Poppins">
        <p>&copy; all rights reserved sofa shine {new Date().getFullYear()} </p>
         <p className="hidden md:block">designed by Riza</p>
        </div>
      </div>
    </footer>
  );
}
