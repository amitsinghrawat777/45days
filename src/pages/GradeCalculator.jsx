import React, { useState } from 'react';
import { Link } from "react-router-dom"

function GradeCalculator() {
    const [grade, setGrade] = useState('');
    const [result, setResult] = useState('');

    function calculateGrade() {
        const numGrade = Number(grade);
        if (numGrade >= 90) {
            setResult('A');
        } else if (numGrade >= 80) {
            setResult('B');
        } else if (numGrade >= 70) {
            setResult('C');
        } else if (numGrade >= 0) {
            setResult('D');
        } else {
            setResult('Invalid grade');
        }
    }

    return (
   
        <div className="grade-calculator">
            <nav>
        <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>⬅back to home</Link>
    </nav>
            
            <div className="calculator-container">
    <div className="calc-box">
        <h1>Grade Calculator 🎓</h1>
        <div className="input-group">
            <label>🖊️</label>
            <input 
                type="number" 
                placeholder="Enter your grade" 
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
        </div>
        <button onClick={calculateGrade}>Calculate</button>
        <h2>Your Grade is: {result}</h2>
    </div>
</div></div>
    )

}

export default GradeCalculator;
