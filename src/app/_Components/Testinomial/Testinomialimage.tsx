import Image from "next/image";
import { FC } from "react";

const Imagetestinomial:FC = () => {
    return (
        <>
        <div className=" relative  h-full flex justify-center items-center w-full   " >


        
            <Image
            className="absolute z-10 md:h-auto h-[15rem] "
             src={'/testinomial.svg'} 
             width={400}
              height={400}
               alt="iphone"
               />
                           
<Image
            className="absolute z-0"
             src={'/grainLight.png'} 
             width={300}
              height={300}
               alt="iphone"
               />

        
      </div>
        </>
      );
}
 
export default Imagetestinomial;