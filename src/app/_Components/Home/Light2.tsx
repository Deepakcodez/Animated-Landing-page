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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 5,
              delay: 1.5,
            }}
          >
            <Image
              className=" absolute z-0 top-[8rem] lg:left-[25rem] "
              src={"/grainLight.png"}
              width={250}
              height={300}
              alt="grain light"
            />
          </motion.div>
    </>
  );
};

export default Light2;
