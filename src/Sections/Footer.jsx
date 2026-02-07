import React from "react";
import { MdOutlineTerminal } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

const handleCopy = () => {
  navigator.clipboard.writeText("sakshamluthra2016@gmail.com");
  // You could trigger a small toast notification or state here
  alert("Email copied to clipboard!");
};

const Footer = () => {
  return (
    <div className="bg-[#020617] flex flex-col items-center gap-3 py-13">
      <Link to={"/"}>
        <div className="logo flex items-center text-xl font-semibold gap-2 ">
          <MdOutlineTerminal className="text-3xl text-blue-500" />
          <h3>Saksham Luthra</h3>
        </div>
      </Link>
      <h2 className="text-sm font-semibold text-[#5e7792dd]">
        © 2026 Portfolio. All rights reserved.
      </h2>
      <div className="flex gap-6 mt-3 items-center">
        <IoMdMail
          onClick={handleCopy}
          className="text-2xl cursor-pointer hover:text-primary hover:scale-[1.2] transition-all duration-200 ease-in-out text-[grey]"
        />
        <a href="https://github.com/SakshamL" target="_blank">
          <FaGithub className="text-2xl cursor-pointer hover:text-primary hover:scale-[1.2] transition-all duration-200 ease-in-out text-[grey]" />
        </a>
        <FaLinkedin className="text-2xl cursor-pointer hover:text-primary hover:scale-[1.2] transition-all duration-200 ease-in-out text-[grey]" />
      </div>
    </div>
  );
};

export default Footer;
