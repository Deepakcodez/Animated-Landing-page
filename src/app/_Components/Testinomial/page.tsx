import { FC } from "react";
import Imagetestinomial from "./Testinomialimage";
import Texttestinomial from "./Testinomialtext";

const Testinomial:FC = () => {
    return ( 
        <>
        <div className="flex justify-center items-center flex-col text-black mt-[5rem] sm:mt-3 ">
            <h1 className="text-orange-500 text-sm">TESTINOMIAL</h1>
            <h1 className="font-bold text-2xl">What Our Users</h1>
            <h1 className="font-bold text-2xl">Says About Us</h1>
        </div>
        <div className=" grid md:grid-cols-2  text-black md:h-[70vh] h-[120vh]    overflow-hidden pb-[4rem] ">
        <div className=" h-full  ">
            <Imagetestinomial/>
       </div>
        <div className=" h-fit md:h-full  ps-2  pe-[5rem]  ">
            <Texttestinomial/>
        </div>
      </div>
        </>
     );
}
 
export default Testinomial;