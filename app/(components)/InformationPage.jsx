// InformationPage.js
import CardSpotlight from "./hover-card";
import { StarIcon, RocketIcon, TargetIcon } from "@radix-ui/react-icons";

const cardsData = [
  {
    title: "Vision",
    content:
      "To empower individual investors worldwide with accessible, data-driven investment solutions, democratizing access to sophisticated financial tools and fostering financial empowerment for all.",
    icon: StarIcon
  },
  {
    title: "Mission",
    content:
      "To revolutionize the way individuals invest by providing a comprehensive platform that combines personalized financial insights, automated trading capabilities, and real-time market data.",
    icon : RocketIcon
  },
  {
    title: "Target",
    content:
      "To enable investors of all backgrounds to make informed decisions, maximize returns, and achieve their financial goals with confidence and autonomy.",
    icon: TargetIcon
  },
  // Add more card data here
];

const InformationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="text-center text-5xl text-gray-300 font-bold mb-10">
        What We Do
      </div>
      <div className="text-center text-xl text-gray-300 max-w-4xl mb-10">
        Fynopsis empowers individual investors worldwide with accessible,
        data-driven investment solutions utilizing the latest <span className="gradient-text top-right"> machine
        learning</span> and <span className="gradient-text top-right">quantitative analysis</span> strategies.
      </div>
      <div className="flex flex-wrap justify-center items-center w-full px-6">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {cardsData.map((feature, i) => (
            <CardSpotlight
              key={i}
              name={feature.title}
              description={feature.content }
              logo={<feature.icon className="h-12 w-12" />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
