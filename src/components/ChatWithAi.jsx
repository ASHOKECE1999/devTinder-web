import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_APP_GEMINI_API_KEY,
});

async function main(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: text,
  });
  return response.text;
  console.log(response.text);
}
const ChatWithAi = () => {
  const [yourAsk, yourAskSetter] = useState("");
  const [data, setData] = useState(null);
  const [showLoader, showLoaderSetter] = useState(false);

  const fetchDataFromIt = async () => {
    showLoaderSetter(true);
    const aiRes = await main(yourAsk + "in 100 words");
    setData(aiRes);
    yourAskSetter("");
    showLoaderSetter(false);
  };

  return (
    <div className="flex justify-center mt-10 flex-col items-center">
      <div className="w-3/4 max-w-xl mx-auto mt-10">
        <label className="block text-lg font-semibold mb-2">
          Chat with Ai Here !!
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            onChange={(e) => yourAskSetter(e.target.value)}
            value={yourAsk}
            className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here"
          />
          <button
            className="flex items-center gap-1 px-4 py-2 bg-amber-400 rounded font-medium hover:bg-amber-500"
            onClick={fetchDataFromIt}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            Chat
          </button>
        </div>
      </div>
      {showLoader && (
        <span className="loading loading-ring loading-xl mt-11"></span>
      )}
      {data && !showLoader && (
        <div className="w-3/4 mt-3 border-2 p-4 rounded-3xl text-cyan-500 text-xl">
          {" "}
          {data}
        </div>
      )}
    </div>
  );
};

export default ChatWithAi;
