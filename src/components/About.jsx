import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#020617] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        {/* Image */}
        <img
          src="/farha.jpeg"
          alt="profile"
          className="w-[220px] h-[220px] rounded-2xl object-cover border border-cyan-400/30 shadow-lg"
        />

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-cyan-400">
            Farha Naaz
          </h2>

          <p className="text-gray-400 mt-2">
            Backend Developer (Java & Spring Boot)
          </p>

          <p className="mt-5 text-gray-300 max-w-2xl">
            B.Tech CSE student (2023–2027) focused on backend development using Java and Spring Boot.
            Skilled in building scalable applications with Spring MVC, Hibernate, and JDBC.
            Actively solving DSA problems on LeetCode.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="#projects" className="px-6 py-2 bg-cyan-400 text-black rounded-lg hover:scale-105 transition">
              Projects
            </a>
            <a href="#contact" className="px-6 py-2 border border-gray-500 rounded-lg hover:bg-white/10">
              Contact
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;