"use client"
import React from "react";
import {
    FaCss3Alt,
    FaHtml5, FaJs,
    FaPython
} from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";






const stackItems = [
    {id: 1, name: 'JavaScript', icon: FaJs, color: "#ffd966" },
    {id: 2, name: 'Nodejs', icon: IoLogoNodejs, color: "#70c84a" },
    {id: 3, name: 'Nextjs', icon: TbBrandNextjs, color: "#000000" },
    {id: 4, name: 'HTML', icon: FaHtml5, color: "#e38d45" },
    {id: 5, name: 'CSS', icon: FaCss3Alt, color: "#4169e8" },
    {id: 6, name: 'Python', icon: FaPython, color: "#515c7f" },
    {id: 7, name: 'MongoDB', icon: SiMongodb, color: "#509233" } 
]

export const Stack = () => {
    return(
        <section className="py-16 glass" id="stack">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">Skills</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2">
                    {stackItems.map((item)=> (
                        <div key={item.id} className="flex items-center justify-center flex-col rounded-xl p-2">
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                                {React.createElement(item.icon, {
                                    className: "w-20 h-20",
                                    style: {color: item.color}
                                })}
                            </div>
                            <p className="text-gray-300 font-semibold">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}