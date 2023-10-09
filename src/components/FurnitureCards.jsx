import React from "react";

export default function (props) {
    const {img,name,price} = props
  return (
    <div
      className="w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"
      style={{ background: `url(${img})`, backgroundSize: "cover" }}
    >
      <div className="hover:bg-[rgba(0,0,0,.3)] shadow hover:shadow-md text-transparent hover:text-white transition duration-150 ease-in-out w-full h-full cursor-pointer py-4 md:py-4 lg:py-6 px-6">
        <h4 className=" font-Lexend uppercase leading-tight text-base md:text-lg lg:text-xl">
          {name}
        </h4>
        <p className=" font-Lexend uppercase  leading-tight text-base md:text-lg lg:text-xl">
          {price}
        </p>
      </div>
    </div>
  );
}
