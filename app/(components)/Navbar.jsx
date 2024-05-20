"use client";
import icon from "../images/fynopsis_noBG.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-transparent">
      <Image src={icon} alt="Fynopsis Logo" className="h-24 w-auto" />
    </div>
  );
};

export default Navbar;
