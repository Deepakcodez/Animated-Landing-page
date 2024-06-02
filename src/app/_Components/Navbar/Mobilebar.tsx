"use client";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  path: string;
}
const MobileBar: FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Testinomial", path: "/#test" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Features", path: "/#feature" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          duration: 2,
        }}
        className="absolute md:hidden flex   z-[99] top-20  h-auto w-full  rounded-md text-black justify-center "
      >
        <ul className="flex  gap-5 ps-4 py-2 justify-center pe-[1rem]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                className={`${
                  item.path === pathname && "text-orange-500 font-bold"
                }`}
                href={item.path}
              >
                {item.name}
              </Link>{" "}
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default MobileBar;
