import React from "react";
import { FaReact } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { MdCss } from "react-icons/md";
import { MdHtml } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const SkillCard = ({ icon, name, color }) => {
    const colorMap = {
      blue: "group-hover:text-blue-400",
      red: "group-hover:text-red-400",
      primary: "group-hover:text-primary",
      green: "group-hover:text-green-400",
      yellow: "group-hover:text-yellow-400",
      orange: "group-hover:text-orange-400",
      white: "group-hover:text-white-400",
    };

    const textColorClass = colorMap[color] || colorMap.primary;
    return (
      <>
        <div className="bg-card-dark rounded-xl flex flex-col items-center justify-center h-30 gap-2 transition-all duration-200 ease-in-out hover:shadow-[0_0_10px_rgba(185,185,238,0.2)] group">
          <div
            className={`text-4xl transition-all duration-200 ease-in-out ${textColorClass}`}
          >
            {icon}
          </div>
          <div className="text-md font-semibold">{name}</div>
        </div>
      </>
    );
  };

  return (
    <div
      id="skills"
      className=" bg-[#02061767] w-full flex flex-col justify-center items-center py-10 pb-20 scroll-mt-30"
    >
      <div className="w-[90%] md:w-[70%] text-2xl font-semibold flex gap-4 items-center justify-start">
        <div className="flex-2.5">My Arsenal</div>
        <div className="flex-5 w-full">
          <div className="w-full h-px bg-linear-to-r from-slate-500 via-slate-600 to-transparent" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-[90%] md:w-[70%] mt-10">
        <SkillCard icon={<FaReact />} name="React" color="primary" />
        <SkillCard icon={<MdJavascript />} name="Javascript" color="yellow" />
        <SkillCard icon={<MdHtml />} name="HTML5" color="orange" />
        <SkillCard icon={<MdCss />} name="Tailwind" color="blue" />
        <SkillCard icon={<FaNodeJs />} name="Node" color="green" />
        <SkillCard icon={<SiNextdotjs />} name="Next.js" color="white" />
      </div>
    </div>
  );
};

export default Skills;
