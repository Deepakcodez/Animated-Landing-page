import Image from "next/image";
import { FC } from "react";
import {motion} from "framer-motion"
interface StarProps {
    size: number;
  }
const Star:FC <StarProps> = ({ size }) =>
    
    {

        console.log('>>>>>>>>>>>', size)
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
              className=" "
              src={"/star.svg"}
              width={size}
              height={size}
              alt="grain light"
            />
          </motion.div>
        </>
     );
}
 
export default Star;