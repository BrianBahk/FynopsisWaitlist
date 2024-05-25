"use client";
import bg from "./images/horizon-background.png";
import { Inter } from "next/font/google";
import Navbar from "./(components)/Navbar";
import InformationPage from "./(components)/InformationPage";
import { useEffect, useState } from "react";
import "./globals.css";

// export const metadata = {
//   title: "Fynopsis",
//   description: "The Better way to finance your person",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const aspectRatio = window.innerWidth / window.innerHeight;
      if (aspectRatio == 16 / 9) {
        setHeight("85vh");
      }

      if (aspectRatio == 9 / 16) {
        setHeight("60vh");
      }

      if (aspectRatio == 512 / 683) {
        setHeight("65vh");
      }

      if (aspectRatio == 4 / 3) {
        setHeight("95vh");
      }

      if (aspectRatio == 3 / 4) {
        setHeight("70vh");
      }

      if (aspectRatio == 375 / 812) {
        setHeight("100vh");
      }

      if (aspectRatio == 812 / 375) {
        setHeight("150vh");
      }

      if (aspectRatio == 667 / 375) {
        setHeight("95vh");
      }

    };

    // Initial check
    updateHeight();

    // Add event listener
    window.addEventListener("resize", updateHeight);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col" style={{ backgroundColor: "#08040c" }}>
            <div
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: height, // Dynamic height
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Navbar className="background-transparent" />
              <section class="wave-container">
                <div className="bottom-fade">
                  <div className="wave wave1"></div>
                </div>
                <div className="wave wave2"></div>
                <div className="wave wave3"></div>
                <div className="wave wave4"></div>
                <div className="wave wave5"></div>
                <div className="wave wave6"></div>
              </section>
              {children}
            </div>
            <div>
              <InformationPage />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
