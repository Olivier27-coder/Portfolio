"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1, 
                transition:{ delay: 0.5, duration: 0.5, ease: "easeIn" }}}
                className="relative w-[298px] h-[298px] xl:w-[496px] xl:h-[496px]">
            <motion.div 
                initial={{ opacity: 0}} 
                animate={{ opacity: 1, 
                transition:{ delay: 0.7, duration: 0.5, ease: "easeInOut" }}}
                className="w-full h-full relative mix-blend-lighten ">
                <Image 
                   src="/assets/oliv.jpg" 
                   priority 
                   quality={100} 
                   fill 
                   alt="Olivier Mutombo, développeur full stack" 
                   className="object-contain"
                    />
               </motion.div>
               {/* circle animation */}
               <motion.svg 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
                  fill="transparent" 
                  viewBox="0 0 506 506" 
                  xmlns="http://www.w3.org/2000/svg">
                <motion.circle 
                  cx="253" 
                  cy="253" 
                  r="250" 
                  stroke="#FFC107"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ strokeDasharray: "24 10 0 0" }}
                  animate={{ 
                    strokeDasharray: ["15 120 25 25", "16 25 92 72","4 250 22 22"],
                    rotate:[120,360],}}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType:"reverse"
                    }}
                   
                />
               </motion.svg>
            </motion.div>
            
        </div>
    );
};
export default Photo;