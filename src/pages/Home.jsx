import React, { useEffect, useState } from "react";
import homeCourselImage1 from "../assets/home-courselImg1.png";
import homeCourselImage2 from "../assets/home-courselImg2.png";
import homeCourselImage3 from "../assets/home-courselImg3.png";
import furnitureNavigationImage from "../assets/furniture-navigation-Image.png";
import aboutUsNavigationImage from "../assets/aboutUs-navigation-image.png";
import locationNavigationImage from "../assets/location-navigation-image.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import livingNavigationImage from "../assets/living-navigation-image.png";
import reclinerNavigationImage from "../assets/recliner-navigation-image.png";
import luxuriesNavigationImage from "../assets/luxuries-navigation-image.png";
import whyChooseUs from "../assets/whyChooseUs.png";
import { Link } from "react-router-dom";

export default function Home() {
  const [translateValue, setTranslateValue] = useState(0);
  const [imageDots, setImageDots] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const courselImagesLength = document.querySelectorAll(".coursel-img").length;

  function changeTranslateValueFunc(event) {
    clearInterval(intervalId);
    if (event.currentTarget.id === "left") {
      setTranslateValue((prevNum) =>
        prevNum === 0 ? courselImagesLength - 1 : prevNum - 1
      );
    } else {
      setTranslateValue((prevNum) =>
        prevNum === courselImagesLength - 1 ? 0 : prevNum + 1
      );
    }
  }

  useEffect(() => {
    const courselImagesLength =
      document.querySelectorAll(".coursel-img").length;
    const dots = [];

    for (let i = 0; i < courselImagesLength; i++) {
      dots.push(
        <div
          key={i}
          className={`${
            translateValue === i
              ? "bg-[rgba(255,255,255,1)]"
              : "bg-[rgba(255,255,255,.3)]"
          } h-3 w-3 rounded-full`}
          id={i}
        ></div>
      );
    }

    setImageDots(dots);

    const interval = setInterval(() => {
      setTranslateValue((prevNum) =>
        prevNum === courselImagesLength - 1 ? 0 : prevNum + 1
      );
    }, 5000);

    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, [translateValue]);
  return (
    <>
      <div className="h-[50vh] w-full md:h-[100vh] relative overflow-x-hidden ">
        <div
          className=" absolute top-[50%] md:top-80 z-20 bg-white p-2 rounded-full opacity-50 mx-2 hover:opacity-100 cursor-pointer"
          id="left"
          onClick={changeTranslateValueFunc}
        >
          <BsChevronLeft className="    text rounded-full text-lg text-black font-bold  " />
        </div>
        <div
          className=" absolute top-[50%] md:top-80 z-20 bg-white p-2 rounded-full opacity-50 mx-2 right-0 hover:opacity-100 cursor-pointer"
          onClick={changeTranslateValueFunc}
        >
          <BsChevronRight className="    text rounded-full text-lg text-black font-bold   " />
        </div>
        <div
          className={`flex transition duration-300 ease-in-out `}
          style={{ transform: `translateX(-${translateValue}00%)` }}
        >
          <div
            className="coursel-img h-[50vh] md:h-[100vh] min-w-full bg-[rgba(0,0,0,.6)] relative"
            style={{
              background: `url(${homeCourselImage1})`,
              backgroundSize: "cover",
              backgroundPosition:"bottom"
            }}
          >
            <div className=" flex flex-col justify-end items-center h-full w-full ">
              <p className=" text-white text-3xl font-bold lg:text-5xl lg:my-1">
                Discover SofaShine
              </p>
              <p className=" text-white text-base lg:text-lg lg:my-1">
                Elevate Your Home's Style
              </p>
              <button className=" text-white outline outline-2 my-2 outline-white px-8 uppercase text-sm py-2 rounded-sm hover:text-gray-900 hover:outline-white-900 hover:bg-white transition duration-150 ease-in-out ">
                call now
              </button>
              <div className="flex gap-3 my-2">{imageDots}</div>
            </div>
          </div>
          <div
            className="coursel-img  h-[50vh] md:h-[100vh] min-w-full bg-[rgba(0,0,0,.6)] relative"
            style={{
              background: `url(${homeCourselImage2})`,
              backgroundSize: "cover",
              backgroundPosition:"bottom"

            }}
          >
            <div className=" z-20 flex flex-col justify-end items-center h-full w-full ">
              <p className=" text-white text-3xl font-bold  lg:text-5xl lg:my-1">
                Discover SofaShine
              </p>
              <p className=" text-white text-base lg:text-lg lg:my-1">
                Elevate Your Home's Style
              </p>
              <button className=" text-white outline outline-2 my-2 outline-white px-8 uppercase text-sm py-2 rounded-sm hover:text-gray-900 hover:outline-white-900 hover:bg-white transition duration-150 ease-in-out ">
                call now
              </button>
              <div className="flex gap-3 my-2">{imageDots}</div>
            </div>
          </div>
          <div
            className="coursel-img h-[50vh] md:h-[100vh] min-w-full bg-[rgba(0,0,0,.6)] relative"
            style={{
              background: `url(${homeCourselImage3})`,
              backgroundSize: "cover",
              backgroundPosition:"bottom"

            }}
          >
            <div className="  z-20 flex flex-col justify-end  items-center h-full w-full ">
              <p className=" text-white text-3xl font-bold  lg:text-5xl lg:my-1">
                Discover SofaShine
              </p>
              <p className=" text-white text-base lg:text-lg lg:my-1">
                Elevate Your Home's Style
              </p>
              <button className=" text-white outline outline-2 my-2 outline-white px-8 uppercase text-sm py-2 rounded-sm hover:text-gray-900 hover:outline-white-900 hover:bg-white transition duration-150 ease-in-out ">
                call now
              </button>
              <div className="flex gap-3 my-2">{imageDots}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-4 md:my-8 md:flex md:gap-x-3 md:mx-auto md:max-w-fit">
        <div className="flex md:flex-col md:gap-y-3 justify-between gap-x-4">
          <div
            className="min-w-[150px] md:min-w-[250px] lg:min-w-[300px] cursor-pointer  min-h-[150px] w-full h-full max-h-fit flex items-end "
            style={{
              background: `url(${furnitureNavigationImage}) `,
              backgroundSize: "cover",
            }}
          >
            <p className=" text-white font-Lexend  uppercase mx-2 text-base my-1">
              Furniture
            </p>
          </div>
          <div
            className="min-w-[150px] min-h-[150px] lg:min-w-[300px] cursor-pointer  w-full h-full flex items-end"
            style={{
              background: `url(${aboutUsNavigationImage}) `,
              backgroundSize: "cover",
            }}
          >
            <p className=" text-white font-Lexend  uppercase mx-2 text-base my-1">
              About Us
            </p>
          </div>
        </div>
        <div className="my-4 md:my-0">
          <div
            className="min-w-[300px] md:min-w-[500px] min-h-[300px] cursor-pointer md:min-h-[500px] lg:min-h-[600px] lg:min-w-[600px] w-full h-full flex items-end"
            style={{
              background: `url(${locationNavigationImage}) `,
              backgroundSize: "cover",
            }}
          >
            <p className=" text-white font-Lexend uppercase  mx-2 text-base my-1">
              Our Location
            </p>
          </div>
        </div>
      </div>
      <h3 className=" text-gray-900 text-center font-Lexend capitalize text-lg my-6 md:my-9 md:text-2xl lg:text-4xl">
        welcome to sofa gallery
      </h3>
      <div className="flex justify-center flex-wrap gap-4 px-2">
        <div
          style={{
            background: `url(${livingNavigationImage}) `,
            backgroundSize: "cover",
          }}
          className=" h-[330px] w-[250px] md:h-[350px] md:w-[270px] lg:h-[380px] lg:w-[290px] flex items-end py-5 px-3"
        >
          <div>
            <p className=" text-base text-white font-Lexend uppercase font-thin mb-3">
              Living
            </p>
           <Link to="furnitures#living">
            <button className=" text-gray-900 text-sm bg-white py-2 px-6 uppercase hover:bg-transparent hover:outline-white hover:outline hover:outline-2 hover:text-white transition ease-in-out duration-150">
              View Products
            </button>
           </Link>
          </div>
        </div>
        <div
          style={{
            background: `url(${reclinerNavigationImage}) `,
            backgroundSize: "cover",
          }}
          className=" h-[330px] w-[250px] md:h-[350px] md:w-[270px] lg:h-[380px] lg:w-[290px] flex items-end py-5 px-3"
        >
          <div>
            <p className=" text-base text-white font-Lexend uppercase font-thin mb-3">
              recliner
            </p>
            <Link to="furnitures#recliner">
            <button className=" text-gray-900 text-sm bg-white py-2 px-6 uppercase hover:bg-transparent hover:outline-white hover:outline hover:outline-2 hover:text-white transition ease-in-out duration-150">
              View Products
            </button>
            </Link>
          </div>
        </div>
        <div
          style={{
            background: `url(${luxuriesNavigationImage}) `,
            backgroundSize: "cover",
          }}
          className=" h-[330px] w-[250px] md:h-[350px] md:w-[270px] lg:h-[380px] lg:w-[290px] flex items-end py-5 px-3"
        >
          <div>
            <p className=" text-base text-white font-Lexend uppercase font-thin mb-3 sh ">
              Luxuries
            </p>
            <Link to='furnitures#luxury'>
            <button className=" text-gray-900 text-sm bg-white py-2 px-6 uppercase hover:bg-transparent hover:outline-white hover:outline hover:outline-2 hover:text-white transition ease-in-out duration-150">
              View Products
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#404042] mt-8">
        <h3 className=" font-Lexend text-white text-center text-base p-6 md:text-lg lg:text-4xl">
          Why choose Us
        </h3>
        <div className="md:flex md:flex-row-reverse md:mt-6 md:pb-9">
          <div className="md:min-w-[50vw]">
            <img
              src={whyChooseUs}
              className="h-[80%] w-[80%] mx-auto pb-6 md:pb-0"
              alt=""
            />
          </div>
          <div className="p-6  lg:px-9">
            <p className=" text-white font-Poppins capitalize text-base lg:text-xl">
              Choose SofaShine for an unparalleled furniture shopping
              experience. We stand out with our commitment to quality,
              affordability, and style. Our handcrafted furniture pieces are
              designed to not only enhance your living spaces but also reflect
              your unique taste and personality. With a wide range of
              customizable options and a dedication to eco-friendly practices,
              we offer more than just furniture.
            </p>
            <button className=" font-Poppins font-bold bg-white text-sm text-gray-900 px-5 py-2 mt-6 lg:mt-8 hover:bg-gray-900 hover:text-white transition duration-150  ease-in-out">
              About Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
