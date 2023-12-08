import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";

const DesktopNavbar = () => {
  return (
    <div className="fixed hidden sm:flex w-full bottom-10 z-40 text-center items-center justify-center">
      <div className="bg-orange-600 flex items-center text-white rounded-full mx-auto max-w-[860px] px-3 py-5">
        <ul className="flex gap-10 justify-around text-xl items-center">
          <li className="rounded-full bg-black  hover:bg-orange-900 p-3 flex-nowrap">
            <SlArrowUp className="text-2xl mx-auto cursor-pointer" />
          </li>
          <Link href="/">
            <li className="hover:bg-white hover:text-orange-600 hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
        Home
          </li>
            </Link>
            <Link href="/Categories">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
            Categories
          </li>
            </Link>
          <Link href="/Products">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
            Products
          </li>
            </Link>
          <Link href="/Brands">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
            Brands
          </li>
            </Link>
          <Link href="/About">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
            About
          </li>
            </Link>
            <Link href="/FAQs">
            <li className="hover:bg-white hover:text-black hover:p-2 hover:rounded-full ease-in-out duration-500 cursor-pointer">
            FAQs
          </li>
            </Link>
            <Link href='/Contact'>
                <li className="hover:bg-orange-900 bg-black rounded-full tracking-tight p-3">
                Contact
                </li>
            </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;