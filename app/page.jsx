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
      <section className="pt-16 md:pt-20 lg:pt-24 xl:pt-20 mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[80%] xl:max-w-[80%] pb-4">
        <div className="left-align">
          <h1 className="pb-4 poppinsTitle className title-text  font-medium max-w-[90%] sm:max-w-[70%] md:max-w-[80%] lg:max-w-[80%] text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl leading-tight">
            The <span className="gradient-text">Future</span> of Financial News
          </h1>

          <p className="pb-4 poppinsSub classNamesub-text font-light text-white sm:text-1xl md:text-2xl lg:text-2xl xl:text-3xl ">
            Cut the noise out. Get the news you deserve.
          </p>

          <form className="text-center"></form>
          <TicketForm className="left-align" />
        </div>
      </section>
    </>
  );
};

export default HomePage;
