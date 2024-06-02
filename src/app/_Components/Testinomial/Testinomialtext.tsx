import Image from "next/image";
import { FC } from "react";

const Texttestinomial: FC = () => {
  return (
    <>
      <div className="relative z-10 md:h-full h-fit lg:pe-[5rem] flex flex-col gap-[2rem] justify-center">
        {/* heading */}
        <div>
          <h1 className="text-lg  font-bold text-black    ">
         The Best Financial App Ever
          </h1>
        </div>

        <div className=" relative z-10 flex flex-col gap-[2.5rem]">
          <div className=" ">
            <h1 className="text-black font-bold text-md font-serif">
              ⭐Clever Notifications
            </h1>
            <p className="text-sm text-black/50 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus ad laudantium officia non. Molestiae sed sint
              obcaecati repudiandae unde? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dicta, ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sit 
            </p>
            <div className="flex items-center  gap-4  mt-3">
                <Image
                className="rounded-full h-[3rem] w-[3rem] bg-slate-500"
                src={"/person1.png"}
                width={50}
                height={50}
                alt="person"
                />
               
                <Image
                className="rounded-full h-[2.5rem] w-[2.5rem] bg-violet-300 opacity-75"
                src={"/person1.png"}
                width={50}
                height={50}
                alt="person"
                />
                <Image
                className="rounded-full h-[2.5rem] w-[2.5rem] bg-blue-300 opacity-75"
                src={"/person1.png"}
                width={50}
                height={50}
                alt="person"
                />
                <Image
                className=" relative rounded-full h-[2.5rem] w-[2.5rem] bg-orange-200 opacity-75"
                src={"/person1.png"}
                width={50}
                height={50}
                alt="person"
                />
                <Image
                className="rounded-full h-[2.5rem] w-[2.5rem] bg-cyan-200 opacity-75"
                src={"/person1.png"}
                width={50}
                height={50}
                alt="person"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Texttestinomial;
