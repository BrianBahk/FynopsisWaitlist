"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

const TicketForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: "" });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.title)) {
      toast("Please enter a valid email address");
      return;
    }

    setIsLoading(true); // Set loading state to true

    const res = await fetch("/api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });

    setIsLoading(false); // Set loading state to false

    if (!res.ok) {
      toast("Failed to create Ticket. Please contact support@fynopsis.ai");
    } 
    if (res.ok && !isLoading) {
      toast("Submitted!");
      document.getElementById("submitBtn").value = "Submitted!";
      document.getElementById("submitBtn").style.backgroundImage = "linear-gradient(to top right, blue-500, blue-300)";
      document.getElementById("submitBtn").disabled = true;
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex ">
      <form
        className="flex ml-[5%] mt-[3%] 2xl:mt-[1%] gap-2 w-1/2"
        method="post"
        noValidate
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
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        style = {{
          zIndex: "10001",
        }}
        />
        <button
          id="submitBtn"
          type="submit"
          className="btn bg-gradient-to-tr from-blue-700 to-sky-500 text-white rounded-xl transition-all duration-500 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-blue-500 hover:from-blue-500 hover:to-blue-300 flex items-center justify-center"
          style={{
            transition: "background-image 0.5s",
            padding: "1.9% 2%",
            width: "10vw",
            minWidth: "100px",
            minHeight: "50px",
            maxWidth: "200px",
            height: "4vw",
            maxHeight: "600px",
            color: "white",
            borderRadius: "10px",
            zIndex: "10001",
          }}
          disabled={isLoading} // Disable button when loading
        >
          {isLoading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            "Join Waitlist"
          )}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
