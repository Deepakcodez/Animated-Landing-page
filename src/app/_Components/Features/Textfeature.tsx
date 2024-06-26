import { Box, ShipWheel, Sparkle } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const Textfeature: FC = () => {
  return (
    <>
      <div className="relative z-10 h-full lg:pe-[5rem] flex flex-col gap-[3rem] justify-center">
        {/* heading */}
        <div>
          <h1 className="text-sm text-orange-500">FEATURES</h1>
          <h1 className="text-4xl  font-bold text-black    ">UiFry Premium</h1>
        </div>

        <div className=" relative z-10 flex flex-col gap-[2.5rem]">
          <div className=" ">
            <div className="text-black font-bold text-md font-serif flex gap-2 items-center">
              <ShipWheel color="orange" size={20} />
              <h1>Budgeting Interval</h1>
            </div>
            <p className="text-sm text-black/50 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus ad laudantium officia non. Molestiae sed sint
              obcaecati repudiandae unde? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dicta, ullam.
            </p>
          </div>

          <div className="">
            <div className="text-black font-bold text-md font-serif flex gap-2 items-center">
              <Box color="orange" size={20} />
              <h1>Budgeting Interval</h1>
            </div>
            <p className="text-sm text-black/50 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus ad laudantium officia non. Molestiae sed sint
              obcaecati repudiandae unde? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dicta, ullam.
            </p>
          </div>

          <div className=" ">
            <div className="text-black font-bold text-md font-serif flex gap-2 items-center">
              <Sparkle color="orange" size={20} />
              <h1>Budgeting Interval</h1>
            </div>
            <p className="text-sm text-black/50 mt-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus ad laudantium officia non. Molestiae sed sint
              obcaecati repudiandae unde? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dicta, ullam.
            </p>
          </div>
        </div>

        <Image
          className="absolute z-0  -right-[12rem]"
          src={"/grainLight.png"}
          height={400}
          width={400}
          alt="light"
        />
      </div>
    </>
  );
};

export default Textfeature;
