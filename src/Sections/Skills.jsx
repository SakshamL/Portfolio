import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full flex justify-center mt-10 mb-20 scroll-mt-40"
    >
      <div className="w-[90%] text-2xl font-semibold flex gap-4 items-center justify-start">
        <div className="flex-2.5">My Arsenal</div>
        <div className="flex-5 w-full">
          <div
            className="w-full h-px bg-linear-to-r
from-slate-500
via-slate-600
to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
