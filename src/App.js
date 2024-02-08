import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("Click below to get a new quote");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    };

    fetchQuote();
  }, []);

  const handleClick = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-center mt-6">Random Quotes</h2>
      <div className="mt-4 ">
        <blockquote>
          <p className="text-lg   text-center font-medium">{quote}</p>
          <p className="  text-center italic ">— {author}</p>
        </blockquote>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="mt-4 py-2 px-4 text-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
