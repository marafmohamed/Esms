import React from "react";

export default function Brand() {
  return (
    <div className="w-screen my-40 flex justify-between px-20 items-center  ">
      <div className="flex flex-col w-[60%]">
        <h1 className=" text-buttonBlue font-Pop font-bold text-5xl py-16">3D BRAND</h1>
        <p className="font-Pop  w-[80%] leading-relaxed text-xl ">
          3D Brand is a Hackathon focused on advertising products through 3D
          design. Companies looking to promote their products will present
          concepts and participants organized in teams of designers and
          developers will create the 3D designs, prototypes, and websites using
          compulsorily 3D, the Hackathon will be based on the concept of
          learning by doing due to the series of 3D and development using 3D
          workshops.
        </p>
      </div>
      <div className=" flex flex-col justify-center items-center h-full w-1/2">
      <img className="w-[70%]" src="image 5.svg" alt="" />
      </div>
    </div>
  );
}
