import { useState, useEffect } from "react";

function QuoteGen() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
    tags: [],
  });

  function getRandomQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        return response.json();
      })
      .then((data) => {
        setQuote({
          content: data.content,
          author: data.author,
          tags: data.tags,
        });
      })
      .catch((error) => {
        setQuote({
          content: "Failed to load quote. Please try again.",
          author: "",
          tags: [],
        });
        console.error("Error fetching quote:", error);
      });
  }

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Center horizontally
        minHeight: "100vh",
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/00/08/75/25/360_F_8752509_KZ2N2wnK28L0HyIcU8gKB3PRj6o5xlO7.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#5C4033", // Dark brown for text, like old ink
        fontFamily: "'Cursive', 'Times New Roman', serif", // A more old-style font
        padding: "20px",
        boxSizing: "border-box", // Include padding in element's total width and height
      }}
    >
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <a
          href="/"
          style={{
            color: "#5C4033",
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          ⬅back to home
        </a>
      </div>

      <h1
        style={{
          textAlign: "center",
          fontFamily: "'Cursive', 'Times New Roman', serif",
          fontSize: "2.5rem",
          marginBottom: "10px",
          marginTop: "50px", // Pushes it down a bit from the very top
          color: "#4A3228", // Even darker brown for heading
        }}
      >
        Quote Generator
      </h1>
      <p style={{ margin: "0 0 30px 0", fontSize: "1.1rem" }}>
        Generate random quotes
      </p>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white to simulate paper overlay
          padding: "30px 40px",
          borderRadius: "8px",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)", // Adds depth
          maxWidth: "700px", // Constrain width for better readability
          width: "90%",
          textAlign: "center",
          marginBottom: "30px",
          border: "1px solid #C0B29A", // Light border for definition
        }}
      >
        <blockquote
          id="quote-text"
          style={{
            fontSize: "1.8rem",
            fontStyle: "italic",
            lineHeight: "1.6",
            margin: "0 0 20px 0",
            color: "#333", // Slightly darker for main quote
          }}
        >
          {quote.content}
        </blockquote>
        <cite
          id="quote-author"
          style={{
            display: "block", // Ensures author is on a new line
            marginTop: "15px",
            fontSize: "1.2rem",
            color: "#666",
            fontWeight: "bold",
          }}
        >
          {quote.author && `- ${quote.author}`}
        </cite>
        <div id="quote-tag" style={{ marginTop: "20px", fontSize: "0.95rem" }}>
          {quote.tags && quote.tags.length > 0 && (
            <span>Tags: {quote.tags.join(", ")}</span>
          )}
        </div>
      </div>

      <button
        id="new-quote-btn"
        onClick={getRandomQuote}
        style={{
          backgroundColor: "#A0522D", // Earthy brown button
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1.1rem",
          fontWeight: "bold",
          boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#8B4513")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#A0522D")}
      >
        New Quote
      </button>
    </div>
  );
}
export default QuoteGen;