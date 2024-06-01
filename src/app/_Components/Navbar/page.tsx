import { FC } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  name: string;
  path: string;
}

const Navbar: FC = () => {
  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/#" },
    { name: "Pricing", path: "/#" },
    { name: "Features", path: "/#" },
  ];

  return (
    <>
      <div className="flex justify-between text-black lg:px-[12rem] md:px-[7rem] px-[.5rem]  mt-9 ">
        {/* right section  */}
        <div className="flex items-center  md:gap-5 gap-1 ">
          <div className="flex md:hidden items-center">
            <Menu size={28} />
          </div>
          <Image src={"/logo.svg"} width={100} height={100} alt="Logo" />

          <ul className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* left section */}
        <div className="flex item-center gap-2   ">
          <button className="bg-black text-white md:py-3 py-2 md:px-6 px-4   rounded-[.2rem]">
            Download
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
