import Image from "next/image";
import Homepg from "./_Components/Home/page";
import Navbar from "./_Components/Navbar/page";
import Features from "./_Components/Features/page";
import Advantages from "./_Components/Advantages/page";
import Testinomial from "./_Components/Testinomial/page";
import Pricing from "./_Components/Pricing/page";

export default function Home() {
  return (
  <>
  <div className="w-full  bg-white h-auto overflow-x-hidden">
    <Navbar/>
    <Homepg/>
    <Features/>
    <Advantages/>
    <Testinomial/>
    <Pricing/>
  </div>
  </>
  );
}
