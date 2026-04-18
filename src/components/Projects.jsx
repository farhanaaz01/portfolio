import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Career Connect",
    description: "AI-powered career assistant that provides personalized job recommendations and guidance using intelligent algorithms.",
    image: "/hero.png",
    github: "https://github.com/farhanaaz01/CareerConnect",
    live: "https://yourlive.com",
    tech: ["React", "Spring Boot", "JWT"],
    type: "Full Stack",
  },
  // {
  //   title: "AI Career Advisor",
  //   description: "GenAI system using embeddings + RAG for career guidance",
  //   image: "/project2.png",
  //   github: "https://github.com/yourrepo",
  //   live: "https://yourlive.com",
  //   tech: ["Python", "RAG", "LLM"],
  //   type: "AI Project",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* 🔹 Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden 
                         bg-white/5 backdrop-blur-md border border-white/10 
                         shadow-lg hover:shadow-cyan-500/20 transition"
            >

              {/* 🔥 CATEGORY BADGE */}
              <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs 
                               bg-cyan-400 text-black rounded-full font-semibold">
                {project.type}
              </span>

              {/* 📸 IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt="project"
                  className="w-full h-52 object-cover 
                             group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* 🔥 OVERLAY (HOVER EFFECT) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 
                              group-hover:opacity-100 transition 
                              flex items-center justify-center gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-white text-black rounded-lg flex items-center gap-2"
                >
                  <FaGithub /> Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-cyan-400 text-black rounded-lg flex items-center gap-2"
                >
                  <FiExternalLink /> Live
                </a>
              </div>

              {/* 🧠 CONTENT */}
              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>

                {/* 🔥 TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white/10 rounded-full 
                                 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;