import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./Slide.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function FAQ() {
  return (
    <div id="FAQ" className="w-screen mt-32 flex flex-col  h-screen">
      <h1 className=" text-buttonBlue font-Pop font-bold text-5xl py-16 px-20">
        FAQ
      </h1>
      <div className="  h-[80%] w-screen  flex flex-col items-center justify-center ">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={false}
          className="h-screen relative text-white w-[70%] bg-buttonBlue mt-10"
        >
          <div className=" w-[80%]  h-full flex flex-col items-center justify-between gap-10">
            <h1 className="text-3xl  tracking-wide font-Pop font-bold mb-3 ">
              What is 3D Brand ?
            </h1>
            <p className="font-Pop text-xl md:w-[80%] leading-relaxed">
              3D Brand is a Hackathon focused on advertising products through 3D
              design. Companies looking to promote their products will present
              concepts and participants organized in teams of designers and
              developers will create the 3D designs, prototypes, and websites
              using compulsorily 3D, the Hackathon will be based on the concept
              of learning by doing due to the series of 3D and development using
              3D workshops
            </p>
          </div>
          <div className=" w-[80%]  h-full flex flex-col items-center justify-between gap-10">
            <h1 className="text-3xl  tracking-wide font-Pop font-bold mb-3 ">
              What is 3D Brand ?
            </h1>
            <p className="font-Pop text-xl md:w-[80%] leading-relaxed">
              3D Brand is a Hackathon focused on advertising products through 3D
              design. Companies looking to promote their products will present
              concepts and participants organized in teams of designers and
              developers will create the 3D designs, prototypes, and websites
              using compulsorily 3D, the Hackathon will be based on the concept
              of learning by doing due to the series of 3D and development using
              3D workshops
            </p>
          </div>
          <div className=" w-[80%]  h-full flex flex-col items-center justify-between gap-10">
            <h1 className="text-3xl  tracking-wide font-Pop font-bold mb-3 ">
              What is 3D Brand ?
            </h1>
            <p className="font-Pop text-xl md:w-[80%] leading-relaxed">
              3D Brand is a Hackathon focused on advertising products through 3D
              design. Companies looking to promote their products will present
              concepts and participants organized in teams of designers and
              developers will create the 3D designs, prototypes, and websites
              using compulsorily 3D, the Hackathon will be based on the concept
              of learning by doing due to the series of 3D and development using
              3D workshops
            </p>
          </div>
          <div className=" w-[80%]  h-full flex flex-col items-center justify-between gap-10">
            <h1 className="text-3xl  tracking-wide font-Pop font-bold mb-3 ">
              What is 3D Brand ?
            </h1>
            <p className="font-Pop text-xl md:w-[80%] leading-relaxed">
              3D Brand is a Hackathon focused on advertising products through 3D
              design. Companies looking to promote their products will present
              concepts and participants organized in teams of designers and
              developers will create the 3D designs, prototypes, and websites
              using compulsorily 3D, the Hackathon will be based on the concept
              of learning by doing due to the series of 3D and development using
              3D workshops
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
