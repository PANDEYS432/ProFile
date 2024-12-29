"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const carouselImages = [
  "/images/projects/1.png",
  "/images/projects/2.png",
  "/images/projects/3.png",
  "/images/projects/4.png",
];

export default function Leadership() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="leadership" className="flex flex-col items-center min-h-screen ">
      {/* Page Heading */}
      <motion.h1
        className="text-4xl font-bold text-center my-8 text-[#ffff66]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Leadership
      </motion.h1>

     
      <div className="flex flex-col lg:flex-row w-full h-full lg:space-x-4">
        
        <motion.div
          className="flex flex-col justify-center items-start p-8 bg-[#d8e8f3] lg:w-1/2 rounded-lg shadow-md mx-4 lg:mx-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          
          <p className="mb-4 text-gray-700">
            I bring a unique combination of skills, experience, and passion to the
            table. With a strong background in software development and project
            management, I am adept at leading teams and driving results. My
            commitment to continuous learning and adaptation allows me to stay
            ahead in a rapidly evolving tech landscape.
          </p>
          <p className="mb-4 text-gray-700">
            I have a proven track record of successfully delivering projects on
            time and within budget. My strong communication skills and ability to
            foster collaboration ensure that team members are engaged and
            motivated. I believe in empowering others to excel, which in turn
            drives collective success.
          </p>
          <p className="text-gray-700">
            By hiring me, you will gain a dedicated leader who not only meets
            project goals but also contributes to a positive and innovative
            workplace culture.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center lg:w-1/2 relative overflow-hidden rounded-lg shadow-md mx-4 lg:mx-0 bg-gradient-to-r animate-gradient"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={carouselImages[currentIndex]}
              alt={`Carousel Image ${currentIndex + 1}`}
              className="object-contain w-full h-auto max-h-96"
            />
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#023D54] text-white p-2 rounded-full shadow-lg"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#023D54] text-white p-2 rounded-full shadow-lg"
            >
              &gt;
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
