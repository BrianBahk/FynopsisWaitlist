import Card from "./Card";

const cardsData = [
  {
    title: "Card 1",
    content: "This is the content of card 1",
    icon: "🌟",
  },
  {
    title: "Card 2",
    content: "This is the content of card 2",
    icon: "🚀",
  },
  // Add more card data here
];

const InformationPage = () => {
  return (
    <div>
      <div className="text-center text-4xl  text-white font-poppins pt-40 ">
        What we do
      </div>
    <div>
        
    </div>
      <div className="flex flex-wrap justify-center pt-20">
        {cardsData.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 ">
            <Card title={card.title} content={card.content} icon={card.icon} />
          </div>
        ))}
        <div className="pt-80"></div>
      </div>
    </div>
  );
};

export default InformationPage;
