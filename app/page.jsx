import React from "react";

import { Poppins } from "next/font/google";
import TicketForm from "./(components)/TicketForm";
const poppinsTitle = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsSub = Poppins({ weight: "300", subsets: ["latin"] });

const metadata = {
  title: "Fynopsis",
  description: "The Future of Financial News",
};

const HomePage = () => {
  return (
    <>
      <section className="">
        <div className="left-align ">
          <h1 className={`${poppinsTitle.className} mb-[1%] mt-[2%] ml-[5%] text-5xl sm:text-6xl  md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl text-white sm:max-w-[50%] md:max-w-[60%] lg:max-w-[70%] xl:max-w-[70%]`}>
            The <span className="gradient-text">Future</span> of Financial News
          </h1>

          <p className={`${poppinsSub.className} mb-[1%] ml-[5%] text-sm sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-white`}>
            Cut the noise out. Get the news you deserve.
          </p>

          <form></form>
          <TicketForm/>
        </div>
      </section>
    </>
  );
};

export default HomePage;
