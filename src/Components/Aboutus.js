import React from "react";

export default function Aboutus() {
  return (
    <div id="AboutUs" className="w-screen my-40 flex justify-evenly  px-20  ">
      <div className=" flex-col flex justify-between h-full w-[30%] ">
        <h1 className=" text-buttonBlue font-Pop font-bold text-5xl py-16">
          ABOUT US
        </h1>
        <img src="Rectangle 7.svg" alt="" />
      </div>
      <div className="flex w-[70%] justify-center items-center">
        <div className=" flex flex-col h-[80%] w-[70%] items-center justify-around pt-16 ">
          <h1 className=" font-Pop text-orangeN font-bold text-4xl">
            CSE Club
          </h1>
          <p className=" font-Pop  w-[80%] leading-relaxed text-xl ">
            The CSE is a student club at the Higher National School of Computer
            Science in Algiers for students passionate about technology. It has
            gained national and international recognition by organizing major
            tech events, including the largest hackathon in Algeria. The club is
            now considered one of the most active and largest student clubs in
            the country.
          </p>
        </div>
      </div>
    </div>
  );
}
