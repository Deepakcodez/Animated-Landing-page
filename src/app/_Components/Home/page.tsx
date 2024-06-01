"use client";
import { FC, useState } from "react";
import data from "../../../data.json";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Light1 from "./Light1";
import Light2 from "./Light2";
import Eclipse1 from "./Eclipse";

const Homepg: FC = () => {
  console.log(">>>>>>>>>>>", data);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="w-full h-[200vh] grid grid-cols-5 relative z-[20] ">
        <div className=" col-span-5 md:col-span-3 lg:ps-[12rem] md:ps-[7rem] ps-[.5rem] text-black ">
          <h1 className="text-6xl font-bold mt-[5rem] pe-[1rem]  ">
            {data.hero.headline}
          </h1>
          <h3 className="text-4xl font-semibold font-italic ">{data.hero.subheadline}</h3>
          <h3 className="mt-5 text-black/65 md:pe-[5rem] pe-[1rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            dolore dolor distinctio, ad atque placeat! Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit, amet consectetur adipisicing
          </h3>
          {/* button */}
          <Link
            href={"/#"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-black grid   grid-cols-6 items-center  w-[8rem] h-[3rem] mt-5 text-white rounded-[.2rem] hover:-translate-y-2 transition ease-linear duration-300 hover:shadow-orange-500/50 hover:shadow-2xl"
          >
            <h1 className=" col-span-4 ps-2">Download</h1>
            <div>
              <MoveRight
                className={
                  isHovered
                    ? "rotate-180  transition ease-linear duration-500 "
                    : "rotate-90  transition ease-linear duration-500  "
                }
                size={isHovered ? 28 : 20}
                color={isHovered ? "orange" : "white"}
              />
            </div>
          </Link>
        </div>








        {/* //left section */}
        <div className="  md:col-span-2  md:flex hidden ">

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 40,
            duration: 2,
            delay: .5,
          }}
          className="absolute lg:right-[2%] -right-[4%] -mt-7 z-30 md:flex hidden "
        >
          <Image
          className="h-[30rem] lg:h-auto"
           src={"/iphone1.svg"} width={500} height={500} alt="iphone1" />
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, x: 30 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
           type: "spring",
           stiffness: 40,
           duration: 3,
           delay: 1,
         }}
        className="absolute lg:-right-[3%] -right-[10%] mt-[3rem] z-20 md:flex hidden">
          <Image 
          className="h-[30rem] lg:h-auto"
          src={"/iphone2.svg"} width={500} height={500} alt="iphone1" />
        </motion.div>



        <motion.div
         initial={{ opacity: 0, x: 20 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
           type: "spring",
           stiffness: 40,
           duration: 3,
           delay: 1.5,
         }}
        className="absolute lg:-right-[8%]  -right-[15%]  mt-[6rem] z-10 md:flex hidden">
          <Image
        className="h-[30rem] lg:h-auto"

          src={"/iphone1.svg"} width={500} height={500} alt="iphone1" />
        </motion.div>
       
        <Light1/>
        <Eclipse1/>
      </div> 
      </div>
      <Light2/>

    </>
  );
};

export default Homepg;
