import React from "react";

const Card = ({ title, content, icon }) => {
  return (
    <div className="bg-black text-white  border-gray-900 border rounded-lg shadow-lg p-4 flex flex-col items-center justify-center">
      <div className="text-2xl mb-2">{icon}</div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-400">{content}</p>
    </div>
  );
};

export default Card;
