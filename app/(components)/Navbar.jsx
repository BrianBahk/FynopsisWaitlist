"use client";
import icon from "../images/fynopsis_noBG.png";
import Image from "next/image";
import { Poppins } from 'next/font/google'

const poppinsTitle = Poppins({ weight: "500", subsets: ['latin'] })
const poppinsSub = Poppins({ weight: "300", subsets: ['latin'] })

const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-transparent">
      <Image src={icon} alt="Fynopsis Logo" className="h-16 w-auto" />
      <h1 className = {`${poppinsSub.className} text-xl sm:text-2xl md:text-2xl lg:text-2xl xl: 2xl:text-3xl text-white`}>Fynopsis</h1>
    </div>
  );
};

export default Navbar;
