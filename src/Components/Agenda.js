import React from "react";
import Check from "./Check";

export default function Agenda() {
  return (
    <div id="Agenda" className="w-screen my-40 flex flex-col px-20  ">
      <h1 className=" text-buttonBlue font-Pop font-bold text-5xl py-16">
        AGENDA
      </h1>
      <div className="w-screen flex  justify-center items-center">
        <div className=" w-[60%] flex flex-col gap-10">
          <Check />
          <Check />
          <Check />
          <Check />
          <Check />
          <Check />
          <Check />
          <Check />
        </div>
      </div>
    </div>
  );
}
