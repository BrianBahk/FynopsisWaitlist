"use client";
import { useState, useEffect } from "react";
import icon from "../images/fynopsis_noBG.png";
import upArrow from "../images/a-removebg-preview (1).png";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppinsTitle = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsSub = Poppins({ weight: "300", subsets: ["latin"] });

const Navbar = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-center p-4 bg-transparent">
        <Image src={icon} alt="Fynopsis Logo" className="h-16 w-auto" />
        <h1 className={`${poppinsSub.className} text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl text-white unselectable`}>
          Fynopsis
        </h1>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-lg"
        >
          <Image src={upArrow} alt="Scroll to top" className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
