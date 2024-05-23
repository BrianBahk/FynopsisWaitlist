// Card.js
import React from "react";

const Card = ({ title, content, icon }) => {
  return (
    <div className="bg-black text-white border-gray-900 border rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-lg text-gray-400">{content}</p>
    </div>
  );
};

export default Card;
