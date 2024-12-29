"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-sm text-white py-6 mt-10">
      <motion.div
        className="container mx-auto px-4 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
