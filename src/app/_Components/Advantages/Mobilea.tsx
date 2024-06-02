"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Star from "../Star";

const Mobileadvantages: FC = () => {
  return (
    <>
      <div className=" relative z-10 flex items-center justify-center  h-full">
        {/* Phone */}
        <div className="flex  items-center justify-center">
          <Image src={"/phone2.svg"} width={190} height={190} alt="iphone" />
        </div>

        {/* Eclipses */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 40,
            duration: 2,
            delay: 1.3,
          }}
          className=" absolute md:scale-75 sm:scale-[.8] scale-[.6] lg:scale-100  -z-10  skew-y-[15deg]   h-[25rem] w-[25rem]  rounded-full border-[.04rem] border-black/75   before:absolute  before:h-[25rem] before:w-[25rem] before:rounded-full before:border-[.04rem] before:border-black/75 before:translate-x-5 before:-translate-y-5
        after:absolute  after:h-[25rem] after:w-[25rem] after:rounded-full after:border-[.04rem] after:border-black/75 after:translate-x-10 after:-translate-y-9
        "
        ></motion.div>

        {/* Light */}
        <Image
          className="absolute -z-20 -top-14 "
          src={"/grainLight.png"}
          width={550}
          height={190}
          alt="grain light"
        />
        <div className="absolute right-12 top-12">
          <Star size={50} />
        </div>
      </div>
    </>
  );
};

export default Mobileadvantages;
