"use client"
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Light1: FC = () => {
   const [isShow, setShow] = useState(false)
   
   useEffect(() => {
    const timer = setTimeout(() => {
        setShow(true);
    }, 2500);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
}, []);

  return (
    <>
      <motion.div
       initial={{ opacity: 0, x: 40 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{
         type: "spring",
         stiffness: 40,
         duration: 2,
         delay: 1,
        }}
        className="absolute  lg:-right-[3%]  h-[120vh] -mt-[5rem] overflow-y-hidden md:flex hidden  "
      >
        
        <Image
        className="lg:h-auto h-[30rem] -"
         src={"/light1.svg"} 
         height={500} 
         width={500} 
         alt="light" />
      </motion.div>
    </>
  );
};

export default Light1;
