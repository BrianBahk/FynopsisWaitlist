import bg from ".//images/background3.png";
import { Inter } from "next/font/google";
import "./globals.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
export const metadata = {
  title: "Fynopsis",
  description: "The Better way to finance your person",
};

// config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100vh", // Default height for landscape orientation
              maxHeight: "100%", // Max height for portrait orientation
              overflow: "hidden", // Hide overflow content
            }}
          >
            {/* <Header /> */}
            {children}
            <div className="h-20"></div>
          </div>
          {/* <CardBottom /> */}
        </body>
      </html>
    </>
  );
}
