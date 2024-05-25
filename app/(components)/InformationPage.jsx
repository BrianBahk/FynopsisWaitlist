// InformationPage.js
import Card from "./Card";

const cardsData = [
  {
    title: "Vision",
    content:
      "To empower individual investors worldwide with accessible, data-driven investment solutions, democratizing access to sophisticated financial tools and fostering financial empowerment for all.",
    icon: "🌟",
  },
  {
    title: "Mission",
    content:
      "To revolutionize the way individuals invest by providing a comprehensive platform that combines personalized financial insights, automated trading capabilities, and real-time market data.",
    icon: "🚀",
  },
  {
    title: "Target",
    content:
      "To empower investors of all backgrounds to make informed decisions, maximize returns, and achieve their financial goals with confidence and autonomy.",
    icon: "🎯",
  },
  // Add more card data here
];

const InformationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="text-center text-5xl text-gray-300 font-bold mb-10">
        What We Do
      </div>
      <div className="text-center text-xl text-gray-300 max-w-3xl mb-10">
        Fynopsis empowers individual investors worldwide with accessible,
        data-driven investment solutions utilizing the latest in machine
        learning and artificial intelligence.
      </div>
      <div className="flex flex-wrap justify-center items-center w-full px-6">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <Card title={card.title} content={card.content} icon={card.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationPage;
