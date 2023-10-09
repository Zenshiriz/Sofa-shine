import React, { useState } from "react";
import mapImg from "../assets/map.png";
import makeAnAppointmentImg from "../assets/make-an-appointment.png";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CgTwitter } from "react-icons/cg";
import { MdLocationOn, MdEmail, MdLocalPhone } from "react-icons/md";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="pt-10 md:pt-16 md:flex md:flex-row-reverse">
        <div className="h-[400px] md:w-[50%] md:min-h-[500px] lg:min-h-[600px] p-8">
          <div
            className="w-full h-full rounded-3xl cursor-pointer"
            style={{
              background: `url(${mapImg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered && (
              <div className="bg-[rgba(0,0,0,.6)] h-full w-full rounded-3xl flex items-end px-4 py-6 transition ease-in-out duration-300">
                <div>
                  <p className="text-white font-Lexend uppercase text-sm">
                    Location
                  </p>
                  <p className="text-white font-Lexend uppercase text-sm">
                    6 block krishnapura, mangalore
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" px-10 md:w-[50%] md:pt-16">
          <p className="font-Lexend uppercase text-gray-900 text-base max-w-[520px]">
            Whether you want us to design and realize your entire interior or
            just your kitchen, wardrobe, or study. Everything is possible.
            Contact us, we would like to hear about your wishes.
          </p>
          <div className="my-8 lg:my-10">
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <MdLocalPhone />
              9844235429
            </p>
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <MdEmail />
              sofashine@gmail.com
            </p>
            <p className=" flex items-center md:items-start gap-1 text-gray-900 font-Lexend md:text-base">
              <MdLocationOn />
              krishnapura, mangalore
            </p>
          </div>
          <div className="mb-8 ">
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <BiLogoFacebook />
              facebook
            </p>
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <AiOutlineInstagram />
              instagram
            </p>
            <p className=" flex items-center gap-1 text-gray-900 font-Lexend md:text-base">
              <CgTwitter />
              twitter
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex h-full">
        <div className="md:w-[50%] md:h-full">
          <img src={makeAnAppointmentImg} alt="" />
        </div>
        <div className="bg-gray-900   md:w-[50%]  px-8">
          <h3 className=" font-Poppins font-bold text-white uppercase  text-2xl lg:text-3xl py-8 lg:py-10">make an appointment </h3>
          <div>
            <h4 className=" font-Poppins font-bold text-white uppercase text-xl lg:text-2xl">create with us</h4>
            <p className=" font-Poppins  text-white capitalize text-sm max-w-[70%] mt-2 pb-6 lg:text-base">
              Bring your ideas ,need and design desires to the sofa shine lab.
              we will create togather with you
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
