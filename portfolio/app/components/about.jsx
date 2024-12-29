"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-gray-800 text-white">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-center max-w-3xl mb-8"
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
        className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://shorturl.at/zodMC", "_blank")}
      >
        View My Resume
      </motion.button>
    </div>
  );
}
