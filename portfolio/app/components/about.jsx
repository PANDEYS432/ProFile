"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center py-16 bg-[#023D54] text-[#ffff66]">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-3xl mb-8 text-[#94DEA5]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Hi! I’m Srishti, a passionate web developer with a strong interest
        in creating interactive and user-friendly web applications. With a
        background in software engineering and a love for learning, I strive to
        build projects that make an impact. I specialize in JavaScript,
        React.js, and Next.js, and I’m always eager to explore new technologies.
      </motion.p>

      <motion.button
        className="px-6 py-3 bg-[#9A6735] rounded-lg text-white font-semibold hover:bg-[#94DEA5]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://shorturl.at/zodMC", "_blank")}
      >
        View My Resume
      </motion.button>
    </div>
  );
}
