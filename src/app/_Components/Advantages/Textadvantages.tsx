import { Bell } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const Textadvantage: FC = () => {
  return (
    <>
      <div className="relative z-10 h-full lg:pe-[5rem] flex flex-col gap-[3rem] justify-center">
        {/* heading */}
        <div>
          <h1 className="text-sm text-orange-500">ADVANTAGES</h1>
          <h1 className="text-4xl  font-bold text-black    ">Why Choose UiFry?</h1>
        </div>

        <div className=" relative z-10 flex flex-col gap-[2.5rem]">
          <div className=" ">
            <div className="text-black font-bold text-md font-serif flex gap-2 items-center">
            <Bell className="bg-orange-600 p-1 rounded-full" color="white" size={30} />
              <h1>Clever Notifications</h1>
            </div>
            <p className="text-sm text-black/50 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur minus ad laudantium officia non. Molestiae sed sint
              obcaecati repudiandae unde? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dicta, ullam.
            </p>
          </div>




      </div>
      </div>
    </>
  );
};

export default Textadvantage;
