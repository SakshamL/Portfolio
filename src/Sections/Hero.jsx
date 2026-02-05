import React from "react";
import { FaCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div id="hero" className="h-150 w-full bg-[#020617] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle 300px at 50% 150px, rgba(16, 25, 40, 1), transparent)`,
          }}
        >
          <div className="w-full flex flex-col items-center justify-center gap-5 mt-15 sm:mt-20 md:mt-20 lg:mt-30 xl:mt-30 px-5">
            <h1 className="flex items-center px-5 py-1 rounded-2xl text-xs font-semibold bg-[#0cc65914] text-[#0cc65a] border border-[#0cc65937] w-fit gap-2">
              <FaCircle className="text-[11px] fade-in-alternate" />
              AVAILABLE FOR WORK
            </h1>
            <h2 className="text-5xl sm:text-[65px] md:text-[70px] text-center font-bold w-[80%] lg:w-[80%] xl:w-[70%] mt-4">
              Building digital experiences that{" "}
              <span className="bg-linear-to-r from-primary via-pink-500 to-indigo-500 text-transparent bg-clip-text">
                matter.
              </span>
            </h2>
            <h3 className="text-center text-[13pt] font-semibold text-[#ada7a7] w-[90%] max-w-[95%] md:w-[60%] lg:w-[50%] xl:w-[40%] mt-2">
              I'm a frontend web developer focused on crafting accessible,
              pixel-perfect web applications with React and Tailwind CSS.
            </h3>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-[65%] md:w-[50%] lg:w-[40%] xl:w-[30%] mt-10 md:mt-5">
              <button className="h-11 w-full flex items-center justify-center gap-2 primary_button px-4 ">
                View Work <FaAngleDown />
              </button>
              <button className="h-11 w-full font-semibold flex border-2 px-4 gap-2 items-center justify-center rounded-lg cursor-pointer leading-normal tracking-[0.030em] border-card-border">
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
