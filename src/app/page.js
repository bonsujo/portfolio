"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaJs,
  FaVuejs,
  FaNpm,
  FaPython,
  FaUnity,
  FaFigma,
  FaAngular,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaDatabase
} from "react-icons/fa"; // Import icons
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    name: "MeteoPlan",
    description:
      "A full-stack application. It allows users create and manage events and task. It integrates the usage of OpenWeather API and Google Maps API to retrieve forecast and suggest venues.",
    technologies: ["JavaScript", "Vue.js", "Npm", "Python", "Html", "Css", "RedisDB"],
    image: "/images/project-1.png",
  },
  {
    id: 2,
    name: "Online Blood Bank",
    description: "A capstone project designed for online blood bank donations.",
    technologies: [
      "JavaScript",
      "Angular",
      "MongoDB",
      "Figma",
      "REST",
      "Html",
      "Css",
    ],
    image: "/images/project-3.png",
  },
  {
    id: 3,
    name: "Crown Curls",
    description:
      "In Process. A hair wash reminder application designed for people with curlier hair types. It features personalized care suggestions and wash reminders. Will further support mobile devices.",
    technologies: ["Html","Css","NextJs", "NodeJs", "MongoDB", "JavaScript", "Figma"],
    image: "/images/wireframe_landing_page.png",
    wireframes: [
      "/images/wireframe_landing_page.png",
      "/images/wireframe_hair_assessment.png",
      "/images/wireframe_assessment_results.png",
    ],
    status: "In Progress - Wireframing",
  },
];

const getTechIcon = (tech) => {
  switch (tech) {
    case "JavaScript":
      return <FaJs className="text-yellow-500 text-3xl" />;
    case "Vue.js":
      return <FaVuejs className="text-green-500 text-3xl" />;
    case "Npm":
      return <FaNpm className="text-red-600 text-3xl" />;
    case "Python":
      return <FaPython className="text-yellow-600 text-3xl" />;
    case "Css":
      return <FaCss3Alt className="text-blue-500 text-3xl" />;
    case "Html":
      return <FaHtml5 className="text-red-500 text-3xl" />;
    case "Unity":
      return <FaUnity className="text-white-700 text-3xl" />;
    case "C#":
      return <i className="fab fa-csharp text-blue-600 text-3xl" />;
    case "Figma":
      return <FaFigma className="text-indigo-600 text-3xl" />;
    case "Angular":
      return <FaAngular className="text-pink-500 text-3xl " />;
    case "NodeJs":
      return <FaNodeJs className="text-green-500 text-3xl" />;
    case "MongoDB":
      return <FaDatabase className="text green-400 text-3xl"/>;
    case "RedisDB":
      return <FaDatabase className="text-red-400 text-3xl"/>;
    default:
      return null;
  }
};

export default function Portfolio() {
  const [modalProject, setModalProject] = useState(null);

  const handleViewMore = (project) => {
    setModalProject(project);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  return (
    <div className="min-h-screen p-8">
    <motion.div className="text-sm uppercase text-center font-semibold mb-4 text-primary tracking-[4px]" initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
            Full-Stack Developer
    </motion.div>
  <motion.h1
    className="text-5xl font-bold text-center h1 mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Hey, my name is Josephine
  </motion.h1>
  <motion.p
    className="text-lg text-center mt-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    I&apos;m a passionate full-stack developer and game
              enthusiast. I love creating intuitive and
              engaging user experiences while working with cutting-edge
              technologies. Feel free to explore my projects and connect with
              me! <b>Say Cheese!</b>
  </motion.p>

      {/* About Me Section */}
      <div id="about" className="mt-16 text-center">
        <div className="mt-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 animate-flash"
          >
            <Image
              src="/images/me.png" 
              alt="About Me"
              width={224} 
              height={224} 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>


      {/* Skills Section */}
      <div id="skills" className="mt-16 text-center">
        <h3 className="text-3xl font-semibold mb-6">Skills</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "JavaScript",
            "Vue.js",
            "Html",
            "Css",
            "Python",
            "Unity",
            "Npm",
            "Angular",
            "MongoDB",
            "Figma",
          ].map((tech) => (
            <div key={tech} className="flex items-center space-x-2">
              {getTechIcon(tech)}
              <span className="text-gray-600 dark:text-gray-400">{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <motion.p
        className="text-xl text-center mt-4 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      ></motion.p>

        {/* Projects Section */}
        <div id="projects" className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4 hover:scale-105 p-6 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: "30%" }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover mb-6b filter blur-[2px] transition-all duration-300 hover:filter-none"
                />
              </motion.div>

              <h3 className="text-x dark:text-gray-100 font-semibold">{project.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <button
                onClick={() => handleViewMore(project)}
                className="text-blue-500 mt-4 inline-block hover:text-blue-700 transition-colors"
              >
                View More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/*Description Section/Card*/}
      {modalProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{modalProject.name}</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{modalProject.status}</p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{modalProject.description}</p>
            <h4 className="mt-4 text-xl font-semibold dark:text-indigo-200">Technologies Used</h4>
            <ul className="mt-2 flex flex-wrap gap-4">

              {modalProject.technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                >
                  {getTechIcon(tech)}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>

            {modalProject.wireframes && (
              <div className="mt-6">
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  className="rounded-lg shadow-md"
                  style={{ maxWidth: '300px', margin: '0 auto' }} // Limit width and center the carousel
                >
                  {modalProject.wireframes.map((src, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={src}
                        alt={`Wireframe ${index + 1} for ${modalProject.name}`}
                        width={250}
                        height={200}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

      <div className="mt-6 text-right">
              <button
                onClick={handleCloseModal}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}



      {/*Contact Section */}
      <div id="contact" className="mt-16 text-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4 text-lg">
          Feel free to reach out via email or social media!
        </p>

        <div className="mt-8 max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/mqaebnza"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-left text-lg font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-left text-lg font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="_replyto"
                required
                className="mt-2 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-left text-lg font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="mt-2 p-3 w-full h-40 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                placeholder="Write your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-800 text-white font-medium text-lg rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
