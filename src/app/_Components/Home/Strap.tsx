import { FC } from "react";
import { motion } from "framer-motion";
const Stripe: FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          duration: 2,
          delay: 1.5,
        }}
        className=" relative lg:scale-100 sm:scale-75  items-center h-[3rem] w-fit  px-8 ps-[5rem] rounded-md  bg-[#FF5555] -rotate-[35deg]  z-[20] top-[5rem] sm:top-[5rem] md:left-[8rem] hidden md:flex 
        // after
        after:content-['CSS'] after:absolute after:bg-black after:text-white  after:w-[25rem]
         after:-translate-x-[13rem] after:h-[3rem] after:rounded-e-md after:origin-bottom-right after:rotate-[16deg] after:flex after:items-center after:justify-center 
         //before
         before:flex before:items-center before:h-[3rem] before:w-fit  before:px-8 before:ps-[5rem] before:pe-[5rem] before:rounded-md  before:bg-[#FF5555] before:rotate-[35deg]  before:content-['tailwind'] before:absolute  before:origin-bottom-left before:-translate-x-[5rem]
         before:-top-[.2rem] before:-z-[20]


         "
      >
        Created by pure CSS
        <h1 className="absolute -top-[7.4rem] -left-[8.1rem] font-extrabold text-black z-50 text-6xl rotate-[20deg]">
          A
        </h1>
      </motion.div>
    </>
  );
};

export default Stripe;
