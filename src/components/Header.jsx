import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";



export default function Header(props) {
  const { windowScroll } = props;
  const [openNav, setOpenNav] = useState(false);
  const windowScrollStyles = windowScroll
    ? "bg-[rgba(255,255,255,.6)] "
    : " bg-transparent ";
   const locationPath =  useLocation().pathname
   
   const paramStyles = locationPath !== "aboutUs" || locationPath !== "contacts" || locationPath !== "furnitures"
   ? "text-gray-900"
   : null;
   const isHome = locationPath === "/"
   const isAboutUs = locationPath === "/aboutUs"
   const aboutNavStyles = locationPath === "/aboutUs" ? "text-gray-900" : null
   const contactsNavStyles = locationPath === "/contacts" || locationPath === "/furnitures" ? "text-gray-900" : null
   console.log()
   return (
    <>
      <header
        className={`${
          windowScroll || openNav ? "text-gray-900" : "text-white" 
        } 
         ${windowScrollStyles} ${
          openNav ? " bg-[#F0F8FF] " : windowScrollStyles
        } flex p-4 md:p-7 md:px-8  justify-between  fixed top-0 w-full z-50 transition duration-300 ease-in-out text-gray-900 `}
      >
        <ul className=" hidden md:flex gap-x-4 lg:gap-x-10 uppercase font-Poppins text-lg">
          <Link to="/">
          <li className={` cursor-pointer ${aboutNavStyles} ${contactsNavStyles} ${paramStyles}         ${windowScroll === false && isHome && openNav === false ? "text-white":null}
 `}>Home</li>
          </Link>
          <Link to="aboutUs">
          <li className={` cursor-pointer ${aboutNavStyles} ${contactsNavStyles} ${paramStyles}         ${windowScroll === false && isHome && openNav === false ? "text-white":null}
 `}>About us</li>
          </Link>
          <Link to="furnitures">
          <li className={` cursor-pointer ${aboutNavStyles} ${contactsNavStyles} ${paramStyles}         ${windowScroll === false && isHome && openNav === false ? "text-white":null}
 `}>Furniture's</li>
          </Link>
        </ul>
        <h3 className={` text-xl  font-Rubik font-extrabold uppercase md:text-3xl lg:text-4xl ${contactsNavStyles} ${paramStyles} ${windowScroll === false && isHome  && openNav === false ? "text-white":null}  ${windowScroll === false && isAboutUs && openNav === false ? "text-white":null}
 `}>
          Sofa Shine
        </h3>
        <ul className=" hidden md:flex gap-x-4 lg:gap-x-10 uppercase font-Poppins text-lg">
          <Link to="contacts">
          <li className={` cursor-pointer ${contactsNavStyles} ${paramStyles}         ${windowScroll === false && isHome && openNav === false ? "text-white":null} ${windowScroll === false && isAboutUs && openNav === false ? "text-white":null}
 `}>call now</li>
          </Link>
          <Link to="contacts">
          <li className={` cursor-pointer ${contactsNavStyles} ${paramStyles}         ${windowScroll === false && isHome && openNav === false ? "text-white":null} ${windowScroll === false && isAboutUs && openNav === false ? "text-white":null}
 `}>contact us</li>
          </Link>
        </ul>
        <p
          className={`text-base md:hidden uppercase font-Poppins cursor-pointer ${contactsNavStyles} ${paramStyles}         ${windowScroll === false && isHome &&  openNav === false ? "text-white":null} ${windowScroll === false && isAboutUs && openNav === false ? "text-white":null}
`}
          onClick={() => setOpenNav((prevState) => !prevState)}
        >
          {openNav ? "close" : "menu"}
        </p>
      </header>
      {openNav && (
        <nav className="h-[100vh] w-full bg-[#F0F8FF] fixed top-0 z-40 flex py-32 px-6 md:hidden">
          <ul className="flex flex-col uppercase font-Poppins text-3xl font-bold gap-y-6 text-gray-900">
            <Link to="/" onClick={()=> setOpenNav(prevState => !prevState)}>
              <li className=" cursor-pointer">Home</li>
            </Link>
            <Link to="aboutUs" onClick={()=> setOpenNav(prevState => !prevState)}>
              <li className=" cursor-pointer">About us</li>
            </Link>
            <Link to='furnitures' onClick={()=> setOpenNav(prevState => !prevState)}>
              <li className=" cursor-pointer">Furniture's</li>
            </Link>
            <Link to='contacts' onClick={()=> setOpenNav(prevState => !prevState)}>
              <li className=" cursor-pointer">Call now</li>
            </Link>
            <Link to='contacts' onClick={()=> setOpenNav(prevState => !prevState)}>
              <li className=" cursor-pointer">Contact us</li>
            </Link>
          </ul>
        </nav>
      )}
    </>
  );
}
