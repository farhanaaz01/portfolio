import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-6 relative overflow-hidden"
    >
      {/* 🔥 Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <p className="text-3xl text-gray-300">
            <Typewriter
              words={["Software Developer", "Full Stack Developer", "Backend Developer"]}
              loop
              cursor
            />
          </p>

          <h2 className="text-2xl mt-4 text-cyan-400">Hello, I'm</h2>

          <h1 className="text-5xl md:text-6xl font-bold mt-2">
            Farha Naaz
          </h1>

          <p className="mt-4 text-gray-300 max-w-md">
            I build scalable backend systems using Java & Spring Boot and love solving DSA problems.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            {/* <button className="px-6 py-3 bg-cyan-400 text-black rounded-full hover:scale-105 transition">
              View Projects
            </button> */}

            <a
              onClick={()=>{window.open("https://drive.google.com/file/d/1c1iZfHWo-bHZldyVX2hCqxklgX140lUq/view?usp=sharing")}}
              download
              className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
            >
              Resume
            </a>
          </div>

          {/* Social */}
          <div className="mt-6 flex gap-5 text-2xl">
            <a href="https://github.com/farhanaaz01" target="_blank">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/naazfarha/" target="_blank">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <img
            src="/v2.png"
            alt="hero"
            className="w-[350px] md:w-[500px] lg:w-[600px] drop-shadow-[0_0_40px_rgba(0,255,200,0.5)]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;