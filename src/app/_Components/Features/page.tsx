import { FC } from "react";
import Mobile from "./Mobile";
import Eclipse1 from "../Home/Eclipse";
import Textfeature from "./Textfeature";
const Features: FC = () => {
  return (
    <>
      <div className=" grid md:grid-cols-2 text-black h-[90vh] mt-5">
        <div className=" ">
            <Mobile/>
       </div>
        <div className=" p-3">
          <Textfeature/>
        </div>
      </div>
    </>
  );
};

export default Features;
