"use client"
import project1 from "@/assets/project-1.png"
import project2 from "@/assets/project-2.png"
import project3 from "@/assets/project-3.png"
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"
import Image from 'next/image'
import React, { useEffect, useState } from "react"

const COLORS_TOP = ["#d9ead3", "#93c47d", "#63b240", "#4d8933"]


const projects = [
    {
      id: 1,
      name: "MeteoPlan",
      description:
        "A full-stack application. It allows users create and manage events and task. It integrates the usage of OpenWeather API and Google Maps API to retrieve forecast and suggest venues.",
      image: project1,
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
      image: project2,
    },
    {
      id: 3,
      name: "Crown Curls",
      description:
        "In Process. A hair wash reminder application designed for people with curlier hair types. It features personalized care suggestions and wash reminders. Will further support mobile devices.",
      image: project3,
    }
]


export const Portfolio = () => {
  const color = useMotionValue(COLORS_TOP[0])

  const [selectedProject, setSelectedProject] = useState(projects[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
        ease: "easeInOut",
        duration: 10, 
        repeat: Infinity,
        repeatType: "mirror"
    })

}, [color])

const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`



    return(
        <motion.section id="portfolio" style={{backgroundImage}} className="py-32 text-white">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl text-green-100 font-bold mb-10">Projects</h2>
              {projects.map((project)=> (
                <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer mb-8 group">
                    <h3 className={`text-3xl font-semibold group-hover:text-green-100/60
                    transition-colors ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                    {project.name}
                    </h3>
                    {selectedProject.id === project.id && (
                        <div className="border-b-2 border-gray-200 my-4"></div>
                    )}
                    {selectedProject.id === project.id && (
                        <p className="text-gray-400 transition-all duration-500 ease-in-out">
                            {project.description}

                        </p>
                    )}

                </div>
 
            ))}
            </div>
            
            <Image src= {selectedProject.image.src} alt={selectedProject.name}
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={800}
                        height={450}
            />
        </div>
        </motion.section>
    )
}