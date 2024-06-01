import { FC } from "react";
import Mobileadvantages from "./Mobilea";
import Textadvantage from "./Textadvantages";

const Advantages:FC = () => {
    return ( 
        <>
        
      <div className=" grid md:grid-cols-2 text-black h-screen mt-5  min-h-screen max-h-[auto]">
        <div className="order-2 md:order-1 h-full sm:ps-[12rem] md:ps-[7rem] ps-[.5rem] ">
           <Textadvantage/>
       </div>
        <div className="order-1 md:order-2  h-full ">
            <Mobileadvantages/>
        </div>
      </div>
        </>
     );
}
 
export default Advantages;