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
import Stripe from "./Strap";
import Star from "../Star";

const Homepg: FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const size:number = 50
  return (
    <>
      <div className="w-full md:h-screen h-auto grid sm:grid-cols-5 relative z-[20] overflow-x-hidden  overflow-y-hidden pb-20">
        <div className=" col-span-5 md:col-span-3 lg:ps-[12rem] md:ps-[7rem] ps-[.5rem] text-black h-fit   ">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2,
              delay: 0.5,
            }}
            className="sm:text-6xl text-4xl font-bold mt-[5rem] pe-[1rem]  "
          >
            {data.hero.headline}
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2,
              delay: 0.7,
            }}
            className="sm:text-4xl text-2xl font-semibold font-italic "
          >
            {data.hero.subheadline}
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2,
              delay: 0.9,
            }}
            className="mt-5 text-black/65 md:pe-[5rem] pe-[1rem] text-xs"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            dolore dolor distinctio, ad atque placeat! Lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit, amet consectetur adipisicing
          </motion.h3>
          {/* button */}
          <motion.div
            className=" flex justify-center md:justify-start  "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 10,
              duration: 2,
              delay: 0.9,
            }}
          >
            <Link
              href={"/#"}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="bg-black grid   grid-cols-6 items-center  w-[8rem] h-[3rem] mt-5 text-white rounded-[.2rem] hover:-translate-y-2 transition ease-linear duration-300 hover:shadow-orange-500/50 hover:shadow-2xl"
            >
              <h1 className=" col-span-4 ps-2">Hover Me</h1>
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
            </Link>{" "}
          </motion.div>
          <Stripe />
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
              delay: 0.5,
            }}
            className="absolute lg:right-[2%] -right-[4%] -mt-7 z-30 md:flex hidden  "
          >
            <Image
              className="h-[30rem] lg:h-auto"
              src={"/iphone1.svg"}
              width={500}
              height={500}
              alt="iphone1"
            />
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
            className="absolute lg:-right-[3%] -right-[10%] mt-[3rem] z-20 md:flex hidden"
          >
            <Image
              className="h-[30rem] lg:h-auto"
              src={"/iPhone2.svg"}
              width={500}
              height={500}
              alt="iphone2"
            />
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
            className="absolute lg:-right-[8%]  -right-[15%]  mt-[6rem] z-10 md:flex hidden"
          >
            <Image
              className="h-[30rem] lg:h-auto"
              src={"/iphone1.svg"}
              width={500}
              height={500}
              alt="iphone3"
            />
          </motion.div>

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
              className=" absolute -z-20 top-40 lg:right-[5rem] md:-right-20 rotate-[70deg] "
              src={"/grainLight.png"}
              width={450}
              height={190}
              alt="grain light"
            />
          </motion.div>

          <Eclipse1 />
        </div>

        <div className="absolute left-12 top-[18rem]">
          <Star size={30} />
        </div>
        <div className="absolute right-12 top-32 md:top-2">
          <Star size={40} />
        </div>
      </div>
      <Light2 />
    </>
  );
};

export default Homepg;
