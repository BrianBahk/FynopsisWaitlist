"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = () => {
  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!res.ok) {
      throw new Error("Failed to create Ticket.");
    }
    if (res.ok) {
      document.getElementById("submitBtn").value = "Submitted!";
      document.getElementById("submitBtn").style.backgroundImage = "linear-gradient(to top right, lightgray, lightgray)";
    }
    router.refresh();
    router.push("/");

  };
  const startingTicketData = {
    title: "",
  };

  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex ">
      <form
        className="flex ml-[5%] mt-[3%] 2xl:mt-[1%] gap-2 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          id="title"
          name="title"
          type="email"
          placeholder="Enter your email"
          onChange={handleChange}
          value={formData.title}
          // className="max-w-[110%] sm:max-w-[110%] md: max-w-[110%] xl:max-w-[110%] 2xl:max-w-[110%] button-input border border-white bg-transparent px-4 py-2 rounded-xl flex-grow focus:outline-none focus:border-blue-500 text-white align-middle placeholder-white"
          className="max-w-[110%] sm:max-w-[110%] md:max-w-[110%] xl:max-w-[110%] 2xl:max-w-[110%] button-input border border-gray-300 bg-transparent px-4 py-2 rounded-xl flex-grow text-white 
          focus:outline-none focus:border-blue-500 align-middle placeholder-slate-200 hover:border-blue-300 focus:ring-2 focus:ring-blue-500
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        style = {{
          zIndex: "10001",
        }}
        />
        <input
          id="submitBtn"
          type="submit"
          // className="btn "
          className="btn bg-gradient-to-tr from-blue-700 to-sky-500 text-white rounded-xl transition-all duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500 hover:from-blue-500 hover:to-blue-300"
          value="Join Waitlist"
          style={{
            transition: "background-image 0.5s",
            padding: "1.9% 2%",
            width: "10vw", // This makes the input 80% of the viewport width
            minWidth: "100px",
            minHeight: "50px",
            maxWidth: "200px", // You can set a maximum width for larger screens
            height: "4vw", // This makes the input 80% of the viewport width
            maxHeight: "600px",
            color: "white",
            borderRadius: "10px",
            zIndex: "10001",
          }}
        />
      </form>
    </div>
  );
};

export default TicketForm;
