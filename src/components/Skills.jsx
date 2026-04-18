import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { GiBrain } from "react-icons/gi";

const skills = [
  { name: "Java", level: 90, icon: <FaJava /> },
  { name: "Spring Boot", level: 85, icon: <SiSpringboot /> },
  { name: "React", level: 75, icon: <FaReact /> },
  { name: "DSA", level: 80, icon: <GiBrain /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 mb-12">
          My technical expertise and proficiency levels
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center group"
            >

              {/* 🔥 Circle */}
              <div className="relative w-32 h-32">

                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#1e293b"
                    strokeWidth="10"
                    fill="transparent"
                  />

                  <motion.circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={314}
                    strokeDashoffset={314 - (314 * skill.level) / 100}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: 314 }}
                    whileInView={{
                      strokeDashoffset: 314 - (314 * skill.level) / 100,
                    }}
                    transition={{ duration: 1.2 }}
                    className="group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                  />
                </svg>

                {/* Gradient */}
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="gradient">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Percentage */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold">
                    {skill.level}%
                  </span>

                  {/* 🔥 ICON */}
                  <span className="text-2xl mt-1 text-gray-300 group-hover:text-cyan-400 transition">
                    {skill.icon}
                  </span>
                </div>
              </div>

              {/* Skill Name */}
              <p className="mt-4 text-lg group-hover:text-cyan-400 transition">
                {skill.name}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;