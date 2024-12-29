"use client";
import { motion } from "framer-motion";
import { EyeIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    name: "TechReads",
    description: "Built an interactive Library portal, enhancing access and engagement for users.",
    languages: { JavaScript: "92.7%", CSS: "6.3%", HTML: "1.0%" },
    updated: "August 25, 2024",
    preview: "https://techreads.onrender.com/", 
    repo: "https://github.com/PANDEYS432/TechReads",
  },
  {
    name: "Ecell-Renaissance",
    description: "Built the E-Cell website for the Renaissance Event",
    languages: { JavaScript: "70.0%", SCSS: "22.6%", CSS: "3.8%" },
    updated: "January 17, 2024",
    preview: "https://ecellmnnita.netlify.app/", 
    repo: "https://github.com/sanskaromar/Team-A-Ecell-Task-2",
  },
  {
    name: "Doodles",
    description: "Designed a real-time multiplayer drawing and guessing game.",
    languages: { JavaScript: "86.2%", CSS: "12.6%", HTML: "1.2%" },
    updated: "November 6, 2024",
    preview: "https://github.com/PANDEYS432/Doodles", 
    repo: "https://github.com/PANDEYS432/Doodles",
  },
  {
    name: "Task Management Application",
    description: "A task management system for tracking tasks with statuses of in-progress, pending, and completed.",
    languages: { JavaScript: "53.8%", CSS: "35.3%", HTML: "10.9%" },
    updated: "November 15, 2024",
    preview: "https://marstasker.netlify.app/", 
    repo: "https://github.com/PANDEYS432/Task_Manager",
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

export default function Projects() {
  return (
    <div id="projects" className="py-10">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-[#ffff66]" // Keep larger screen styles
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Recent Projects
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 lg:px-16" // No changes for larger screens
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#E9F7EC] shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#023D54]">{project.name}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            {project.languages && (
              <div className="flex items-center flex-wrap space-x-2 mb-4"> {/* Allow wrap for smaller screens */}
                <p className="font-semibold text-[#023D54]">Languages:</p>
                {Object.entries(project.languages).map(([lang, percent]) => (
                  <span
                    key={lang}
                    className="text-sm text-gray-600 px-2 py-1 rounded-full border border-gray-300"
                  >
                    {lang}: {percent}
                  </span>
                ))}
              </div>
            )}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <motion.a
                className="flex items-center px-4 py-2 text-white bg-[#9A6735] border rounded hover:bg-[#94DEA5] transition-colors"
                whileHover={{ scale: 1.05 }}
                href={project.preview} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <EyeIcon className="h-5 w-5 mr-2" />
                Preview
              </motion.a>
              <motion.a
                className="flex items-center px-4 py-2 border bg-[#9A6735] text-white rounded hover:bg-[#94DEA5] transition-colors"
                whileHover={{ scale: 1.05 }}
                href={project.repo} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                Repo
              </motion.a>
            </div>
            <p className="mt-4 text-right text-xs text-gray-600">
              Updated on {project.updated}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
