import React from "react";

import { Montserrat } from "next/font/google";
import TicketForm from "./(components)/TicketForm";
import { Toaster } from "./(components)/sonner"
const styledTitle = Montserrat({ weight: "500", subsets: ["latin"] });
const styledSubtitle = Montserrat({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Fynopsis",
  description: "The Future of Financial News",
};

const HomePage = () => {
  return (
    <>
      <section className="unselectable flex">
        <div className="left-align">
          <h1 className={`${styledTitle.className} mb-[1%] mt-[2%] ml-[5%] text-5xl sm:text-6xl  md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl text-gray-100 sm:max-w-[50%] md:max-w-[60%] lg:max-w-[70%] xl:max-w-[70%]`}>
            The <span className="gradient-text top-right">Future</span> of Financial News
          </h1>

          <p className={`${styledSubtitle.className} mb-[1%] ml-[5%] text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-200`}>
            Cut the noise out. Get the news you deserve.
          </p>

          <form></form>
          <TicketForm/>
        </div>
        <Toaster/>
      </section>
    </>
  );
};

export default HomePage;
