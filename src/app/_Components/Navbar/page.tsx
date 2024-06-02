"use client";
import { FC, useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileBar from "./Mobilebar";
import { usePathname } from "next/navigation";
interface NavItem {
  name: string;
  path: string;
}

const Navbar: FC = () => {

  const [isShow, setShow] = useState<boolean>(false);
  const pathname = usePathname();
  console.log('>>>>>>>>>>>', pathname)

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#test" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Features", path: "/#feature" },
  ];

  
  const handleMenu = () => {
    setShow(prevState => !prevState);
  };

  return (
    <>
    {
      isShow&&
    <MobileBar/>
    }
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          duration: 2,
          delay: 1.3,
        }}
        className="flex justify-between text-black lg:px-[12rem] md:px-[7rem] px-[.5rem]  mt-9 "
      >
        {/* right section  */}
        <div className="flex items-center  md:gap-5 gap-1 ">
          <div 
          onClick={handleMenu}
           className="flex md:hidden items-center">
            
            <Menu size={28} />
          </div>
          <Link href={"/"} className="cursor-pointer">
            <Image src={"/logo.svg"} width={100} height={100} alt="Logo" />
          </Link>

          <ul className="hidden md:flex gap-4 cursor-pointer">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                className={`${item.path === pathname&&"text-orange-500 font-bold"}`}
                href={item.path}>
                  {item.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        {/* left section */}
        <div className="flex item-center gap-2   ">
          <button className="bg-black hover:bg-black/75 text-white md:py-3 py-2 md:px-6 px-4   rounded-[.2rem]">
            Download
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
