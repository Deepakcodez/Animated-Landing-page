import { FC } from "react";
import Mobile from "./Mobile";
import Eclipse1 from "../Home/Eclipse";
import Textfeature from "./Textfeature";
const Features: FC = () => {
  return (
    <>
      <div
        id="feature"
        className=" grid md:grid-cols-2 flex-row-reverse text-black min-h-auto max-h-[auto] mt-5"
      >
        <div className=" h-auto">
          <Mobile />
        </div>
        <div className=" h-full p-3  ">
          <Textfeature />
        </div>
      </div>
    </>
  );
};

export default Features;
