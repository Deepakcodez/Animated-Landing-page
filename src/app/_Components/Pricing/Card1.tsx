import { FC } from "react";
import data from "../../../data.json";
const Card1: FC = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-transparent to-orange-100 h-[30rem] w-[22rem] max-h-auto text-black/75  rounded-md p-[4rem] flex flex-col gap-8 shadow-md hover:shadow-2xl transition duration-500 ease-in-out backdrop-blur-xl">
        <div className="text-center">
          <h1 className="font-semibold text-lg text-orange-600 ">Basic</h1>
          <h1 className="text-2xl">$0.00</h1>
        </div>

        <ul className="flex flex-col items-start justify-start gap-4 text-black list-disc ">
          <li>Lorem ipsum dolor si!</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor !</li>
        </ul>
        <button className="bg-black rounded-md text-white  py-2">Get Started Free</button>

      </div>
    </>
  );
};

export default Card1;
