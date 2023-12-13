import React from "react";

export default function HeroSection() {
  return (
    <div id="Home" className="w-screen my-40 flex justify-center items-center px-10  h-96 ">
      <div className="w-1/2 flex flex-col items-center h-full justify-between pl-4">
        <div className=" w-[80%] flex flex-col items-center justify-around">
          <h1 className=" font-Pop text-6xl font-bold text-center tracking-normal leading-normal">
            Experience the Future of{" "} 
            <span className=" text-orangeN">E-commerce</span> with{" "}
            <span className="text-orangeN">3D</span>
          </h1>
          <p className="font-Pop text-center">
            Revolutionize your online shopping experience with our cutting-edge
            3D technology.
          </p>
        </div>
        <div className="w-full flex justify-around px-32 py-10">
        <button className=" bg-buttonBlue  w-36 rounded-lg h-12 font-Pop font-bold text-white hover:text-buttonBlue hover:bg-white hover:border-2 hover:border-buttonBlue">Learn more</button>
        <button className="Join border-buttonBlue  w-36 rounded-lg h-12 font-Pop border  text-buttonBlue font-bold hover:text-white hover:bg-buttonBlue hover:border-0">Join us</button>
        </div>
      </div>
      <div className="Heros w-1/2  h-full grid  grid-cols-2 grid-rows-4 gap-4">
        <img
          className="col-start-1 col-span-1   "
          src="online-shopping-3d-illustration-online-shop-online-payment-concept-with-floating-elements-discount-banner-design-with-3d-rendering-vector-illustration_145666-1502 1.svg"
          alt=""
        />
        <img
          className="col-start-2 col-span-1 row-start-2 "
          src="9027295 1.svg"
          alt=""
        />
        <img
          className="col-start-1 col-span-1 row-start-4 row-end-4  "
          src="1674822576880 1.svg"
          alt=""
        />
      </div>
    </div>
  );
}
