"use client"

import { motion } from "framer-motion";

const educations = [
    {id:'01', title: 'McMaster University, Bachelor of Technology', year:'2023 - Present',description: 'Coursework: Operating Systems, Software Requirements and Specification, Computer Security, Advanced Web Development'}, 
    {id:'02', title: 'Mohwak College, Business Management Certificate', year:'2023 - Present', description: 'Coursework: Project Management, Financial Systems, Technical Communications, Managment Principles  '}, 
    {id:'03', title: 'Sheridan College, Advanced Diploma, Software and Network Engineering', year:'2019 - 2023', description: 'Coursework: User Design, User Interface, Web Programming and Development, Mobile Web-Based Applications, Database Management, Cloud Systems'}
]
export const Education= () => {

    return(
        <section className="text-white py-20 glass" id="about"> 
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="container mx-auto flex flex-col md:flex-row">
          {/* Education Title */}
          <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
            <h2 className="text-5xl text-green-100 font-extrabold sticky top-20">
              Education
            </h2>
          </div>
  
          {/* Education List */}
          <div className="md:w-3/4 space-y-10">
            {educations.map((education) => (
              <div
                key={education.id}
                className="grid grid-cols-[150px_auto] gap-6 items-start"
              >
                <div className="text-green-100/60 font-bold text-xl whitespace-nowrap">
                  {education.year}
                </div>
                  <div>
                  <h3 className="text-2xl font-bold mb-1">{education.title}</h3>
                  <p className="text-gray-300">{education.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    )
}