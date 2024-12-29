"use client";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Technical Skills",
    skills: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
    ],
  },
  {
    category: "Area of Interest",
    skills: [
      { name: "Object Oriented Programming", level: 70 },
      { name: "Operating System", level: 65 },
      { name: "Database & Management System", level: 80 },
      { name: "Structured Query Language", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center py-10 bg-[#023D54]">
     
      <motion.h1
        className="text-4xl font-bold mb-8 text-[#ffff66]" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h1>

     
      <div className="flex justify-between w-full max-w-6xl">
        {skillsData.map((section, index) => (
          <div key={index} className="w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4 text-[#ffff66]"> 
              {section.category}
            </h2>
            {section.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="mb-2">
                <div className="flex justify-between mb-1 text-white"> 
                  <span>{skill.name}</span>
                
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2"> 
                  <motion.div
                    className="bg-[#94DEA5] h-2 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
