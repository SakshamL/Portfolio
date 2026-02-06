import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-fit w-full bg-[#040d22] relative py-20 pb-0 scroll-mt-10 flex justify-center"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px, 40px 40px, 60px 60px",
          backgroundPosition: "0 0, 10px 10px, 30px 30px",
        }}
      />
      <div className="flex flex-col lg:w-[80%] lg:flex-row items-center lg:justify-around text-center z-10 relative ">
        <div className="lg:w-[45%]">
          <h1 className="text-5xl/15 font-semibold mx-5 mb-5">
            Ready to bring your vision to life?
          </h1>
          <h2 className="mx-5 text-lg text-[#a0a2b7] font-semibold mb-10">
            Whether you’re a startup or an established team, let’s connect to
            explore how we can create meaningful impact together.
          </h2>
        </div>

        <form className="lg:w-[60%]">
          <input
            type="text"
            name="name"
            defaultValue=""
            placeholder="Name"
            className="rounded-md px-4 py-2  w-[80%] mb-5 bg-card-dark border border-white/10 text-white placeholder:text-gray-500 outline-none backdrop-blur-md duration-all duration-300 focus:border-blue-500/50 focus:bg-white/8 focus:ring-4 focus:ring-blue-500/10"
            autocomplete="off"
          />
          <input
            type="email"
            name="email"
            defaultValue=""
            placeholder="Email"
            className="rounded-md px-4 py-2  w-[80%] mb-5 bg-card-dark border border-white/10 text-white placeholder:text-gray-500 outline-none backdrop-blur-md duration-all duration-300 focus:border-blue-500/50 focus:bg-white/8 focus:ring-4 focus:ring-blue-500/10"
            autocomplete="off"
          />
          <textarea
            rows="5"
            placeholder="Message..."
            className="w-[80%] bg-card-dark border border-white/10 rounded-md px-4 py-2 
               text-white placeholder:text-gray-500 outline-none
               backdrop-blur-md transition-all duration-300
               focus:border-blue-500/50 focus:bg-white/8 focus:ring-4 focus:ring-blue-500/10
               resize-none scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent"
            autocomplete="off"
          />
          <button className="px-6 py-2 text-lg mt-8 mb-15 primary_button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
