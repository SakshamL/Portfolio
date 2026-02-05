import React from "react";
import { useState, useEffect, useRef } from "react";
import { MdOutlineTerminal } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      //   // Logic: If the menu is open AND the click target is NOT inside the menu
      //   if (
      //     isOpen &&
      //     menuRef.current &&
      //     !menuRef.current.contains(event.target)
      //   ) {
      //     setIsOpen(false);
      //   }

      // Logic: Only close if the click is OUTSIDE the menu AND OUTSIDE the navbar
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideNav =
        navRef.current && !navRef.current.contains(event.target);

      if (isOpen && clickedOutsideMenu && clickedOutsideNav) {
        setIsOpen(false);
      }
    };

    // Attach the listener to the document
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up: Always remove listeners to prevent memory leaks!
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const handleResMenuClick = () => {
    setIsOpen(!isOpen);
    const menu_list = document.getElementById("menu-list");
  };

  const scrollToTopLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This creates the gliding animation
    });

    // Optional: Close the mobile menu if it's open when clicking logo
    if (isOpen) setIsOpen(false);
  };

  return (
    <div
      className="sticky flex h-18 justify-around items-center -mx-10 border-b border-b-card-border dark:border-b-[#e5e7eb21] top-0 z-50 glass-nav transition-all duration-200 ease-in-out sm-navbar"
      ref={navRef}
    >
      <Link to={"/"} onClick={scrollToTopLogoClick}>
        <div className="logo flex items-center text-xl font-semibold gap-2 ">
          <MdOutlineTerminal className="text-3xl text-blue-500" />
          <h3>Saksham Luthra</h3>
        </div>
      </Link>
      {isOpen ? (
        <AiOutlineClose
          className="text-3xl text-primary my-5 right-0 cursor-pointer sm:hidden"
          onClick={handleResMenuClick}
        />
      ) : (
        <CgMenuBoxed
          className="text-3xl text-primary my-5 right-0 cursor-pointer sm:hidden"
          onClick={handleResMenuClick}
        />
      )}
      <div
        id="menu-list"
        ref={menuRef}
        className={`text-sm font-semibold font-display flex fixed ${isOpen ? "responsive-nav" : "sm:bg-transparent"} h-dvh w-[40%] flex-col items-center py-10 top-17.75 right-8  sm:transition-none sm:translate-x-0 ease-in-out  sm-menu-list ${isOpen ? "translate-x-0 transition-transform duration-200" : "translate-x-full"} border-card-border border `}
      >
        <Link
          to={"/"}
          onClick={scrollToTopLogoClick}
          className="w-full px-4 sm:w-fit text-center py-5 cursor-pointer transition-all duration-200 ease-in-out hover:bg-card-border hover:text-primary sm:hover:bg-transparent 
          "
        >
          <h3 onClick={handleResMenuClick}>About</h3>
        </Link>
        <a
          href="#skills"
          className="w-full px-4  sm:w-fit text-center py-5 cursor-pointer transition-all duration-200 ease-in-out hover:bg-card-border hover:text-primary sm:hover:bg-transparent"
          onClick={handleResMenuClick}
        >
          <h3>Skills</h3>
        </a>
        <a
          href="#projects"
          className="w-full px-4  sm:w-fit text-center py-5 cursor-pointer transition-all duration-200 ease-in-out hover:bg-card-border hover:text-primary sm:hover:bg-transparent"
          onClick={handleResMenuClick}
        >
          <h3>Projects</h3>
        </a>

        <button
          className=" h-10 mt-8 sm:mt-0 px-4 sm:w-fit text-sm sm:ml-5 sm:-mr-5 sm:px-5 lg:px-6 hover:scale-105  primary_button"
          onClick={handleResMenuClick}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navigation;
