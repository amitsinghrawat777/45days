import React, { useState } from "react";

// ThemeToggleButton toggles between light and dark themes
function ThemeToggleButton({ onToggle, theme }) {
    return (
        <button style={{ background: theme === "☀️" ? "Black" : "#646246", color: "white", border: "none", cursor: "pointer", fontSize: "24px", padding: "10px 20px", borderRadius: "100px" }} onClick={onToggle}>
            {theme === "☀️" ? "🌙" : "☀️"}
        </button>
    );
}

// ThemeProvider manages the theme state and provides the toggle button
function ThemeProvider() {
    // State to track current theme, default is '☀️'
    const [theme, setTheme] = useState("☀️");

    // Function to toggle theme between '☀️' and '🌙'
    const toggleTheme = () => {
        setTheme((prev) => (prev === "☀️" ? "🌙" : "☀️"));
    };

    // Apply theme class to the root div
    return (
        <div className={theme}>
            {/* Theme toggle button */}
            <ThemeToggleButton onToggle={toggleTheme} theme={theme} />
            {/* Other children/components can go here */}
        </div>
    );
}

export default ThemeProvider;