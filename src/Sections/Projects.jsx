import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const Projects = () => {
  const ProjectCard = ({ image, title, desc, tech, livelink, github }) => {
    return (
      <>
        <div className="flex flex-col rounded-xl border border-card-border w-[90%] sm:w-[47%] lg:w-[30%] h-fit group hover:shadow-[0px_0px_20px_0px_rgba(30,59,93,0.63)] transition-all duration-200 ease-in-out">
          <div className="overflow-hidden rounded-tr-xl rounded-tl-xl border-b border-card-border flex justify-center">
            <img
              src={image || "/no-poster.jpg"}
              alt="text"
              className="w-full h-50 rounded-tr-xl rounded-tl-xl scale-[1] group-hover:scale-[1.06] transition-all duration-200 ease-in-out "
            />
          </div>

          <div className="p-5 bg-card-dark rounded-br-xl rounded-bl-xl h-[30%]">
            <h1 className="font-semibold text-lg ">{title}</h1>
            <p className="text-[#8f8d8d] font-semibold text-sm text-wrap w-full mt-3">
              {desc
                ? desc.length > 150
                  ? desc.slice(0, 150) + "..."
                  : desc
                : "No Description"}
            </p>
            <div className="flex gap-3 mt-5 mb-4 sm:flex-wrap">
              {tech?.map((t, index) => {
                return (
                  <p
                    key={index}
                    className="px-3 py-1 bg-[#045a9b24] text-primary border border-[#0088ff87] rounded-full text-xs font-semibold"
                  >
                    {t}
                  </p>
                );
              })}
            </div>
            <div className="flex gap-5 border-t border-[#8080803b] text-[11pt] font-semibold pt-3">
              <a href={livelink} target="/" className="flex items-center gap-2">
                <FaEye />
                Live Demo
              </a>
              <a href="/" className="flex items-center gap-2">
                <FaCode />
                View Code
              </a>
            </div>
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
        <div className="flex flex-col gap-8 sm:flex-wrap items-center sm:flex-row sm:justify-center sm:items-start w-[90%] lg:w-[70%]">
          <ProjectCard
            image="/watchall-pic.PNG"
            title="WatchAll Media - Movies and TV Shows"
            desc="Created a movie database and streaming web app using TMDB API, featuring lists of Movies and TV Shows with dynamic loading and routing."
            tech={["React JS", "Tailwind CSS", "TMDB API"]}
            livelink="https://watchall-kappa.vercel.app"
          />
          <ProjectCard
            image="/portfolio-pic.PNG"
            title="Portfolio - Saksham Luthra"
            desc="This beautiful and fully responsive portfolio app you are currently accessing is developed using the latest in demand web technologies like React and Tailwind CSS."
            tech={["React JS", "Tailwind CSS"]}
            livelink="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
