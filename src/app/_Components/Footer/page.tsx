import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 md:gap-2 gap-8 mt-10 py-10 pb-24 border-t-2 text-black h-auto py-5 lg:px-[12rem] md:px-[7rem] px-[.5rem]">
        <div className="col-span-1  flex flex-col gap-2">
          <Image src={"/logo.svg"} width={70} height={50} alt="Logo" />
          <h1 className="text-sm flex gap-1">
            <Mail color="orange" size={15} />
            Help@FryUi.in
          </h1>
          <h1 className="text-sm flex gap-1">
          <Phone color="orange" size={15} />
            +78436967796
            </h1>
        </div>


        

        <div className="col-span-3  grid grid-cols-3 ">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">Links</h1>
            <li className="list-none text-sm	">Home</li>
            <li className="list-none text-sm		">AboutUs</li>
            <li className="list-none text-sm		">Booking</li>
            <li className="list-none text-sm		">Blogs</li>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">Legals</h1>
            <li className="list-none text-sm	">Terms Of Use</li>
            <li className="list-none text-sm		">Privacy Policy</li>
            <li className="list-none text-sm		">Cookie Policy</li>
          </div>          

          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">Products</h1>
            <li className="list-none text-sm	">Take a Tour</li>
            <li className="list-none text-sm		">Live Chat</li>
            <li className="list-none text-sm		">Reviews</li>
          </div>
        </div>





        <div className="col-span-2 ">
            
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-xl">Newsletter</h1>
            <li className="list-none text-sm	">Stay Up To Date</li>
            <div className="h-[2rem]">
                <input
                className="h-full w-[8rem] px-1"
                placeholder="You Email"
                />
                <button className="bg-black text-white text-sm h-full px-2 rounded-md">Subscribe</button>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
