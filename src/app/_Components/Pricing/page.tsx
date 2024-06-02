import { FC } from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";

const Pricing: FC = () => {
  return (
    <>
    <div className="text-black text-center py-5 pb-[5rem]">
        <h1 className="text- text-orange-500">Pricing</h1>
        <h1 className="text-3xl text-black font-semibold">What we Provide</h1>
    </div>
      <div className="grid sm:grid-cols-2 lg:px-[12rem] h-fit text-black ">
        <div className="h-full w-full px-3 bg-green-20 flex justify-center mb-4">
            <Card1/>
        </div>
        <div className="h-full w-full px-3 bg-green-20 flex justify-center ">
            <Card2/>
        </div>
      </div>
    </>
  );
};

export default Pricing;
