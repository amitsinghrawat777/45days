import React, { useState, useEffect } from "react";
import ThemeProvider from "@/components/ui/ThemeProvider";

// Counter component using React state
function Counter() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
    return () => {
      console.log(`Cleaning up...`);
    };
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);


  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const isDark = theme === "dark";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: isDark
          ? "linear-gradient(45deg, #232526 0%, #414345 100%)"
          : "linear-gradient(45deg, #000000ff 0%, #ff6b6b 100%)",
        transition: "background 0.3s",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "8px 8px",
          borderRadius: "200px",
          border: "none",
          background: isDark ? "#fff" : "#222",
          color: isDark ? "#222" : "#fff",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          
        }}
      >
        {isDark ? "☀️" : "🌙"}
      </button>
      <div
        style={{
          backgroundColor: isDark ? "#333" : "white",
          boxShadow:
            "0 4px 15px " +
            (count > 0 ? "green" : count < 0 ? "red" : "grey"),
          textShadow: "0 2px 5px rgba(0,0,0,0.1)",
          maxWidth: "300px",
          width: "90%",
          margin: "20px",
          fontFamily: "Arial, sans-serif",
          padding: "20px 40px",
          borderRadius: "10px",
          textAlign: "center",
          color:
            count > 0
              ? "green"
              : count < 0
              ? "red"
              : isDark
              ? "#ccc"
              : "grey",
          transition: "color 0.3s, background 0.3s",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div>
          <button
            style={{
              backgroundColor: "red",
              margin: "0 5px",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
              padding: "5px 20px",
              fontSize: "16px",
            }}
            onClick={increment}
          >
            +
          </button>
          <button
            style={{
              backgroundColor: "blue",
              margin: "0 5px",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
              padding: "5px 20px",
              fontSize: "16px",
            }}
            onClick={reset}
          >
            reset
          </button>
          <button
            style={{
              backgroundColor: "green",
              margin: "0 5px",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
              padding: "5px 20px",
              fontSize: "16px",
            }}
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
