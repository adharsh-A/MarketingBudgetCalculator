import React, { useEffect, useState } from "react";
import "./Google.css";
import { CardSpotlight } from "../components/card-spotlight.jsx";
import { HoverBorderGradient } from "../components/hover-border-gradient.jsx";
import { Button, Modal } from "antd";
const Instagram = () => {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState(null); // Changed from array to null for clarity
  const [open, setOpen] = useState(false);
  const [resultData, setResultData] = useState(null);
  useEffect(() => {
    if (result) {
      if (result[0] === "option1") {
        let data = `For Your Ads Post on Instagram(Single image with caption and CTA), it will cost approx: $${result[1]}`;
        setResultData(data);
      } else if (result[0] === "option2") {
        let data = `For Your Story Ads on Instagram(Up to 60 seconds, dynamic content), it will cost approx: $${result[1]}`;
        setResultData(data);
      } else if (result[0] === "option3") {
        let data = `For Your Carousel Ads(Multiple images/videos in one ad), it will cost approx: $${result[1]}`;
        setResultData(data);
      }
    }
  }, [result]);
  const handleCalculate = () => {
    if (!service) {
      alert("Please select a service");
      return;
    }

    if (!budget || budget <= 0) {
      alert("Please enter a valid budget");
      return;
    }

    const serviceMultipliers = {
      option1: 1.5,
      option2: 1.25,
      option3: 1.7,
    };

    const multiplier = serviceMultipliers[service];

    if (multiplier) {
      const result = (budget * multiplier).toFixed(2);
      setResult([service, result]); // Sets both service and result
      setOpen(true); // Ensuring the open state is set to true
      console.log("Setting modal open:", open); // Debug log    }
    }
  };

  return (
    <>
      {open && (
        <Modal
          title="Google Ads Calculator"
          className="custom-modal" // Applying the custom class
          description={resultData}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          open={open}
        >
          <p>{resultData}</p>
        </Modal>
      )}
      <div className="google-container flex items-center justify-center h-screen">
        <CardSpotlight className="h-[30rem] w-[45rem] rounded-2xl z-20">
          <div className="google-card w-full h-full flex flex-col items-center justify-center">
            <h1 className="z-20 text-3xl font-bold text-center text-white py-10">
              Youtube Ads Expense Calculator
            </h1>
            <div className="radio-group z-20 gap-10 flex flex-row">
              <label className="z-20 text-center flex flex-col">
                <input
                  type="radio"
                  className="radio-input"
                  value="option1"
                  checked={service === "option1"}
                  onChange={(e) => setService(e.target.value)}
                />
 Advertise as Posts (CPC)            </label>
              <label className="z-20 text-center flex flex-col">
                <input
                  type="radio"
                  className="radio-input"
                  value="option2"
                  checked={service === "option2"}
                  onChange={(e) => setService(e.target.value)}
                />Story Ads(60s-Cost-Per-Click)              </label>
              <label className="z-20 text-center flex flex-col">
                <input
                  type="radio"
                  value="option3"
                  className="radio-input"
                  checked={service === "option3"}
                  onChange={(e) => setService(e.target.value)}
                />
Carousel Ads(photos+videos)              </label>
            </div>
            <div className="google-inputfield mt-6">
              <label htmlFor="input" className="z-20">
                <input
                  type="number"
                  id="input"
                  placeholder="Enter the Quantity"
                  className="border-0 outline-0 bg-transparent w-full"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </label>
            </div>
            <HoverBorderGradient
              onClick={handleCalculate} // Call the handler without passing args
              containerClassName="rounded-full mt-6"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <span>See Result</span>
            </HoverBorderGradient>
          </div>
        </CardSpotlight>
      </div>
    </>
  );
};

export default Instagram;
