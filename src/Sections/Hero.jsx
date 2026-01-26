import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div id="hero" className="h-120 w-full bg-[#020617] relative bg-">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 150px, rgba(16, 25, 38, 1), transparent)`,
          }}
        >
          <div className="w-full flex flex-col items-center justify-center gap-5 mt-15 px-5">
            <h1 className="flex items-center px-5 py-1 rounded-2xl text-xs font-semibold bg-[#0cc65914] text-[#0cc65a] border border-[#0cc65937] w-fit gap-2">
              <FaCircle className="text-[11px] fade-in-alternate" />
              AVAILABLE FOR WORK
            </h1>
            <h2 className="text-4xl text-center font-bold w-full mt-4">
              Building digital experiences that{" "}
              <span className="bg-linear-to-r from-primary via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                matter.
              </span>
            </h2>
            <h3 className="text-center text-[13pt] font-semibold text-[#ada7a7] w-[90%] mt-2">
              I'm a frontend web developer focused on crafting accessible,
              pixel-perfect web applications with React and Tailwind CSS.
            </h3>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-[90%] mt-5">
              <button className="h-10 w-full flex items-center justify-center gap-2 primary_button px-4 ">
                View Work <FaAngleDown />
              </button>
              <button className="h-10 w-full font-semibold flex border-2 px-4 gap-2 items-center justify-center rounded-lg cursor-pointer leading-normal tracking-[0.030em] border-card-border">
                Download CV <FaDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
