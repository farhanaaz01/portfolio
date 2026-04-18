import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
      <div className="w-full max-w-6xl px-6">

        <h2 className="text-4xl text-center mb-10 font-bold">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <p className="text-gray-400 mb-6">
              Feel free to reach out for collaborations or opportunities.
            </p>

            {/* 🔥 CONTACT LINKS */}
            <div className="flex flex-col gap-4 text-lg">

              {/* Email */}
              <a
                href="mailto:farha.naaz.2004.222@email.com?subject=Contact%20from%20Portfolio"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <span className="text-xl">📧</span>
                <span>farha.naaz.2004.222@email.com</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaGithub className="text-xl" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                className="flex items-center gap-3 hover:text-cyan-400 transition"
              >
                <FaLinkedin className="text-xl" />
                <span>LinkedIn</span>
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <form className="flex flex-col gap-4">
            <input
              className="p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Name"
            />

            <input
              className="p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Email"
            />

            <textarea
              rows="4"
              className="p-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder="Message"
            />

            <button className="bg-cyan-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
              Send Message 🚀
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;