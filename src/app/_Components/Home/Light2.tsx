"use client"
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Light2: FC = () => {
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
        className="absolute top-1 left-[10rem]  overflow-y-hidden   "
      >
        <Image
          className={`${isShow?"": "hidden"} absolute  mix-blend-soft-light h-auto `}
          src={"/grain.svg"}
          height={1500}
          width={1500}
          alt="grain"
        />
        <Image
        className="lg:h-auto md:h-[30rem] h-[35rem] md:mt-0 -mt-[3rem] "
         src={"/light2.svg"} 
         height={400} 
         width={400} 
         alt="light" />
      </motion.div>
    </>
  );
};

export default Light2;
