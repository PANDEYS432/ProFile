"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const dashboard = () => {
  return (
    <section className="lg:py-16 bg-[#023D54] text-[#94DEA5]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="bg-clip-text bg-gradient-to-r text-transparent from-[#94DEA5] to-[#ffff66]">
              Srishti Pandey
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
            />
          </h1>
          <p className="text-[#94DEA5] text-sm sm:text-lg mb-6 lg:text-lg italic">
            "Driven by innovation to create impact."
          </p>
          <div className="flex flex-col sm:flex-row items-center mt-3">
            <Link
              href="https://shorturl.at/zodMC"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-[#9A6735] hover:bg-[#94DEA5] text-white mb-2 sm:mb-0"
            >
              <span className="block bg-[#023D54] hover:bg-[#94DEA5] rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
            <div className="flex space-x-4 ml-0 sm:ml-4">
              <Link
                href="https://github.com/PANDEYS432" 
                target="_blank"
                className="text-[#94DEA5] hover:text-[#ffff66] text-4xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/srishtipandey76/" 
                target="_blank"
                className="text-[#94DEA5] hover:text-[#ffff66] text-4xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/avatar.jpeg"
              alt="avatar"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default dashboard;
