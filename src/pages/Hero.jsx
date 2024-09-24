import React ,{useState}from "react";
import { Vortex } from "../components/Vortex.jsx";
import Services from "./Services.jsx";
import {FeaturesSectionDemo} from "./Feature.jsx";

import { TypewriterEffectSmooth } from "../components/TypeWriter.jsx";

const Hero = (props) => {


  const words = [
    {
      text: "Effortless ",
    },
    {
      text: "Marketing ",
    },
    {
      text: "Budget ",
    },
    {
      text: "Planning ",
    },
    {
      text: "at ",
    },
    {
      text: "Your ",
    },
    {
      text: "Fingertips!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <>
    <div
      className=" dark:text-white"
      style={{
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >


      <Vortex height="100vh">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-1 relative z-20 font-bold tracking-tight">
            Marketing Budget Calculator
          </h1>
          <TypewriterEffectSmooth words={words} />
          <div>
            <button className="w-40 h-10 rounded-xl bg-transparent border dark:border-white border-transparent text-white text-sm mr-4">
              Join now
            </button>
            <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
              Signup
            </button>
          </div>
        </div>
      </Vortex>
    </div>
    <div className="w-full h-full  z-10 h-auto">

    <Services/>
    </div>
{/* <div className="absolute bottom-0 z-0 mt-10">

    <FeaturesSectionDemo/>
</div> */}

        </>
  );
};

export default Hero;
