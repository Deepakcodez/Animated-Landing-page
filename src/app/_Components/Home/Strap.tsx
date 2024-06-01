import { FC } from "react";
import {motion }from 'framer-motion'
const Stripe: FC = () => {
  return (
    <>
        <motion.div
         initial={{ opacity: 0, }}
         animate={{ opacity: 1, }}
         transition={{
           type: "spring",
           stiffness: 40,
           duration: 2,
           delay: 1.5,
         }}
          className=" relative strip flex items-center h-[3rem] w-fit  px-8 ps-[5rem] rounded-md  bg-[#FF5555] -rotate-[35deg]  z-[20] top-[5rem] left-[8rem]
        // after
        after:content-['CSS'] after:absolute after:bg-black after:text-white  after:w-[25rem]
         after:-translate-x-[13rem] after:h-[3rem] after:rounded-md after:origin-bottom-right after:rotate-[16deg] after:flex after:items-center after:justify-center 
         //before
         before:flex before:items-center before:h-[3rem] before:w-fit  before:px-8 before:ps-[5rem] before:pe-[5rem] before:rounded-md  before:bg-[#FF5555] before:rotate-[35deg]  before:content-['tailwind'] before:absolute  before:origin-bottom-left before:-translate-x-[5rem]
         before:-top-[.2rem] before:-z-[20]
         "
        >
          Created by pure CSS
        </motion.div>
    </>
  );
};

export default Stripe;
