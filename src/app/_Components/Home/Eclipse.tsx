import { FC } from "react";
import {motion} from 'framer-motion'
const Eclipse1:FC = () => {
    return (
        <>
        <motion.div
          initial={{ opacity: 0, }}
          animate={{ opacity: 1, }}
          transition={{
            type: "spring",
            stiffness: 40,
            duration: 2,
            delay: 1.3,
           }}
        className="absolute  skew-y-[15deg] top-[7rem] right-[2rem] h-[22rem] w-[20rem]  rounded-full border-[.04rem] border-black/75   before:absolute  before:h-[22rem] before:w-[20rem] before:rounded-full before:border-[.04rem] before:border-black/75 before:translate-x-5 before:-translate-y-5
        after:absolute  after:h-[22rem] after:w-[20rem] after:rounded-full after:border-[.04rem] after:border-black/75 after:translate-x-10 after:-translate-y-9
        "></motion.div>
        </>
      );
}
 
export default Eclipse1;