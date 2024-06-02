import { FC } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Image from "next/image";

const Pricing: FC = () => {
  return (
    <>
    <div id="pricing" className="text-black text-center py-5 pb-[5rem]">
        <h1 className="text- text-orange-500">Pricing</h1>
        <h1 className="text-3xl text-black font-semibold">What we Provide</h1>
    </div>
      <div className=" relative z-0 grid sm:grid-cols-2 lg:px-[12rem] h-fit text-black ">
        <div className="h-full w-full px-3 bg-green-20 flex justify-center mb-4">
            <Card1/>
        </div>
        <div className="h-full w-full px-3 bg-green-20 flex justify-center ">
            <Card2/>
        </div>
        <Image
        className=" absolute -z-20 top-14 right-[9rem] "
        src={'/grainLight.png'} width={350} height={190} alt="grain light"
        />
      </div>
    </>
  );
};

export default Pricing;
