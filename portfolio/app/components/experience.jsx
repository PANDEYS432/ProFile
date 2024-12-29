"use client";
import { motion } from "framer-motion";
import { BriefcaseIcon } from "@heroicons/react/24/solid";

const experiences = [
  {
    company: "NTPC",
    profile: "Software Engineer Intern",
    duration: "June 2024 - June 2024",
    logo: "/images/ntpc.png",
  },
  {
    company: "Innovation and Incubation Hub MNNIT Foundation",
    profile: "Web Developer",
    duration: "June 2023 - July 2023",
    logo: "/images/iih.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export default function Experience() {
  return (
    <div id="experience" className="py-10 ">
      <motion.h2
        className="text-3xl font-bold text-center mb-8  text-[#ffff66]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center items-stretch gap-8 px-6 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-[#ffff] border-[3px] border-[#9A6735] rounded-lg shadow-md p-6 flex flex-col items-center w-full sm:w-1/3 hover:shadow-lg transition-shadow"
            variants={cardVariants}
            whileHover="hover"
          >
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="h-16 w-16 mb-4 rounded-full border-2 border-[#023D54]"
            />
            <h3 className="text-lg font-semibold mb-1 text-[#023D54] text-center break-words">
              {exp.company}
            </h3>
            <p className="text-sm text-gray-700 mb-2">{exp.profile}</p>
            <div className="flex items-center text-sm text-[#9A6735]">
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              {exp.duration}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
