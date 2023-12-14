import React from "react";

export default function Footer() {
  return (
    <div id="ContactUs" className="w-screen my-40 flex flex-col px-16  gap-10 items-center">
      <h1 className="text-buttonBlue font-Pop font-bold text-4xl py-16">
        STILL HAVE QUESTIONS ABOUT
      </h1>
      <p className="font-Pop text-3xl text-orangeL font-normal">Contact us</p>
      <div className="flex justify-between items-center h-44 mt-4">
        <img
          src="image 1.svg"
          className="w-full h-full object-cover"
          alt="Image 1"
        />
        <img
          src="image 5.svg"
          className="w-full h-full object-cover"
          alt="Image 5"
        />
      </div>
      <div className="flex justify-evenly items-center py-16 h-10 w-[35%]">
        <img src="youtube.svg" alt="" className="cursor-pointer" />
        <img src="Vector.svg" alt=""className="cursor-pointer" />
        <img src="Vector (1).svg" alt=""className="cursor-pointer" />
        <img src="Vector (2).svg" alt="" className="cursor-pointer"/>
      </div>
    </div>
  );
}
