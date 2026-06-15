"use client";

import { motion } from "framer-motion";

//variants
const stairsAnimation = {
    initial: {
        top: 0,
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//calculate the reverse index fot staggered delay
const reverseIndex = (index) => {   
    const totalSteps = 6;
    return totalSteps - index - 1;
};


const Stairs = () => {
    return (
     <>
    
    {/* render 6 motion divs, each representing a step of the stairs.
        each div will have the same animate defined by the stairAnimate object.
        They delay for each div is calculated sinomically based on it's reversed index,
        creating a stoggered effect with decreasing delay for each subsequent step.
    */}
    {[...Array(6)].map((_, index) => {
        return ( 
        <motion.div 
        key={index} 
        variants={stairsAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
             delay: reverseIndex(index) * 0.1,
             duration: 0.2,
             ease: "easeInOut", }}
       
        className="h-full w-full bg-white relative"
        />
     );
    })}
    </>
);
};

export default Stairs;