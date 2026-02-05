import React from "react";

const Projects = () => {
  const ProjectCard = ({ image, title, desc, tech, livelink, github }) => {
    return (
      <>
        <div className="flex flex-col rounded-xl border border-card-border w-100 h-fit group">
          <div className="overflow-hidden rounded-tr-xl rounded-tl-xl border-b border-card-border flex justify-center">
            <img
              src={image || "/no-poster.jpg"}
              alt="text"
              className="w-full h-50 rounded-tr-xl rounded-tl-xl scale-[1] group-hover:scale-[1.10] transition-all duration-200 ease-in-out "
            />
          </div>

          <div className="p-3 bg-card-dark rounded-br-xl rounded-bl-xl h-[30%]">
            <h1 className="font-semibold text-lg ">{title}</h1>
            <p className="text-[#a8a8a8] font-semibold text-sm text-wrap w-full">
              {desc
                ? desc.length > 150
                  ? desc.slice(0, 105) + "..."
                  : desc
                : "No Description"}
            </p>
            <div className="flex gap-3 mt-5 mb-4">
              {tech?.map((t, index) => {
                return (
                  <p
                    key={index}
                    className="px-3 py-0.5 bg-[#045a9b24] text-primary border border-[#0088ff87] rounded-full text-xs"
                  >
                    {t}
                  </p>
                );
              })}
            </div>
            <div className="border-t border-[#8080803b]">jfjf</div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div id="projects" className="bg-[#020617] scroll-mt-20">
      <div
        className="w-full flex flex-col justify-center items-center py-10  mb-15"
        style={{
          backgroundImage: `radial-gradient(circle 400px at 50% 500px, rgba(16, 25, 40, 1), transparent)`,
        }}
      >
        <div className="w-[90%] md:w-[70%] text-2xl font-semibold flex items-center justify-start">
          <div>Featured Projects</div>
        </div>
        <div className="w-[90%] md:w-[70%] font-normal flex items-center justify-start mt-2 text-[grey]">
          <h2 className="mb-10">A selection of my recent work</h2>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <ProjectCard
            image="/vite.svg"
            title="E-commerce Dashboard"
            desc="A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory A comprehensive analytics dashboard for online retailers featuring real-time data visualization, inventory "
            tech={["React", "Tailwind"]}
          />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default Projects;
