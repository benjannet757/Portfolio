"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 overflow-hidden">

      {/* CENTER GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#f3e2c7] to-white opacity-70 z-0"></div>

      {/* BACK TEXT */}
      <h1 className="absolute text-[140px] md:text-[220px] font-light text-black/10 italic top-20 left-1/2 -translate-x-1/2 z-0">
        Hey, there
      </h1>

      {/* LEFT */}
      <motion.div
        className="relative z-10 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-sm bg-white px-4 py-1 rounded-full shadow inline-block mb-6">
          Available for new opportunities
        </span>

        <h2 className="text-5xl md:text-[90px] font-black leading-[0.9]">
          I AM <br />
          BENJANNET
        </h2>
      </motion.div>

      {/* IMAGE + RIGHT TEXT */}
      <div className="relative z-10 flex items-center gap-10 mt-10 md:mt-0">

        {/* IMAGE */}
        <img
          src="/FrontMyIMG.png"
          className="w-[300px] md:w-[420px] h-[380px] md:h-[520px] object-cover rounded-2xl"
        />

        {/* RIGHT TEXT BLOCK */}
        <div className="hidden md:block max-w-[200px]">
          <p className="text-sm text-gray-600 leading-relaxed">
            Specialized in Web Design, UI/UX, Webflow, and Front-End Development.
          </p>
        </div>

        {/* FLOAT TAG */}
        <div className="absolute top-6 right-10 bg-white px-4 py-2 rounded-full shadow text-sm">
           UI/UX Designer
        </div>

      </div>
    </section>
  );
}