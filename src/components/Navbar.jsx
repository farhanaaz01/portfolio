import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 
                    w-[90%] md:w-[70%] 
                    flex justify-between items-center 
                    px-8 py-3 
                    rounded-full 
                    bg-white/20 dark:bg-black/30 
                    backdrop-blur-lg 
                    border border-white/20 
                    shadow-lg 
                    z-50">

      <h1 className="text-lg font-bold text-blue-600 dark:text-white">
        Farha.dev
      </h1>

      <div className="space-x-6 text-gray-800 dark:text-gray-300 font-medium">
        <a href="#hero" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>

        {/* <button
          onClick={() => setDark(!dark)}
          className="ml-4 px-3 py-1 rounded-full border border-white/30 hover:scale-110 transition"
        >
          {dark ? "☀️" : "🌙"}
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;