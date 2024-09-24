import React from "react";
import { GlareCard } from "../components/glare-card.jsx";
import { BackgroundLines } from "../components/Lines.jsx";
import { Link } from "react-router-dom";

const Services = (props) => {
  return (
    <BackgroundLines className=" absolute flex items-center justify-center w-full flex-col px-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
          position: "absolute",
        }}
      >
        <Link to="/google">
        <GlareCard className="flex flex-col items-center justify-center ">
          <p className="text-white font-bold text-xl mt-4">Google Ads Calculator</p>
        </GlareCard>
        </Link>
        <Link to="/youtube">
        <GlareCard className="flex flex-col items-center justify-center">
          <p className="text-white font-bold text-xl mt-4">Youtube Ads Calculator</p>
        </GlareCard>
        </Link>
        <Link to="/instagram">
        <GlareCard className="flex flex-col items-center justify-center">
          <p className="text-white font-bold text-xl mt-4">Instagram Ads Calculator</p>
        </GlareCard>
        </Link>
      </div>
    </BackgroundLines>
  );
};

export default Services;
Services;
