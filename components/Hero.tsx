"use client";
import profilepic from '@/assets/profilepic.png';
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from 'next/image';
import { useEffect } from "react";
import { FiArrowRight } from 'react-icons/fi';


const COLORS_TOP = ["#d9ead3", "#93c47d", "#63b240", "#4d8933"]


export const Hero = () =>{
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10, 
            repeat: Infinity,
            repeatType: "mirror"
        })

    }, [color])

    const backgroundImage = useMotionTemplate `radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate `1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return(
        
        <motion.section
        style={{
            backgroundImage
        }}
        className = "relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200">
            <div className="z-10 flex flex-col items-center">
                <h1 className="text-green-100/40 text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text
                    font-black leading-tight text-transparent md:text-7xl">Josephine</h1>

                <Image src={profilepic} alt="profile picture" width={250} height={250}/>

                {/*<div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 md-4  "></div>*/}

            <p className= "my-6 max-w-xl">Passionate full-stack developer.</p>

            <motion.button  
                style={{
                    border, boxShadow
                }}
                whileHover={{
                    scale: 1.015
                }}
                whileTap={{
                    scale: 0.985
                }}
                className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                onClick={() => window.open('/nresume_25.pdf', '_blank')} 
                >
                  Download CV <FiArrowRight className="" />


            </motion.button>
            </div>
        </motion.section>
    )
}