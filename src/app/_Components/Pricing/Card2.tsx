import { FC } from "react";
import data from "../../../data.json";
const Card2: FC = () => {
  return (
    <>
      <div className="border h-[30rem] w-[22rem] text-black/75  rounded-md p-[4rem] flex flex-col gap-8 shadow-md hover:shadow-2xl transition duration-500 ease-in-out">
        <div className="text-center">
          <h1 className="font-semibold text-lg text-orange-600 ">Premium</h1>
          <h1 className="text-2xl">$3.50</h1>
        </div>

        <ul className="flex flex-col items-start justify-start gap-4 text-black list-disc ">
          <li>Lorem ipsum  !</li>
          <li>Lorem ipsuloit amet !</li>
          <li> ipsum  sit amet !</li>
          <li>Lorem sit amet !</li>
        </ul>
        <button className="bg-black rounded-md text-white  py-2">Get Team Plan</button>
      </div>
    </>
  );
};

export default Card2;
