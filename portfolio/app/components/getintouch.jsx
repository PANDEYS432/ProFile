"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'; // Correct import for Heroicons v2

export default function LetsConnect() {
  return (
    <div id="contact" className="py-10 bg-[#023D54] text-[#ffff66]">
      <motion.h2
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Let's Connect
      </motion.h2>
      <motion.p
        className="text-lg mb-4 px-4 max-w-full text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feel free to reach out to discuss opportunities or collaborations!
      </motion.p>
      <div className="flex flex-col items-center sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"> {/* Modified here */}
        <a href="mailto:srishtip432@gmail.com" className="flex items-center text-[#94DEA5]">
          <EnvelopeIcon className="h-5 w-5 mr-2" /> {/* Email icon */}
          srishtip432@gmail.com
        </a>
        <a href="tel:+1234567890" className="flex items-center text-[#94DEA5]"> {/* Replace with your phone number */}
          <PhoneIcon className="h-5 w-5 mr-2" /> {/* Phone icon */}
          +1 234 567 890
        </a>
      </div>
    </div>
  );
}
