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
          type="text"
          placeholder="Enter your email"
          onChange={handleChange}
          required={true}
          value={formData.title}
          className="max-w-[110%] sm:max-w-[110%] md: max-w-[110%] xl:max-w-[110%] 2xl:max-w-[110%] button-input border border-white bg-transparent px-4 py-2 rounded-xl flex-grow focus:outline-none focus:border-blue-500 text-white align-middle "
        style = {{
          zIndex: "10001",
        }}
        />
        <input
          type="submit"
          className="btn "
          value="Join Waitlist"
          style={{
            backgroundImage: "linear-gradient(to right, #004aad, #38b6ff)",
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
