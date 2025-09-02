import { Link } from "react-router-dom"
import { useState } from "react"

function Home() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div className="home-container">
      <div className="title-section">
        <h1 className="main-title">
          Welcome to 45 days of
          <span className="highlight"> Fullstack Development </span>
          challenge
        </h1>
        <h2 className="author">by Amit Rawat</h2>
      </div>
      
      <nav className="navigation">
        <Link 
          to="/business_card" 
          className={`nav-link ${activeLink === 'business' ? 'active' : ''}`}
          onMouseEnter={() => setActiveLink('business')}
          onMouseLeave={() => setActiveLink(null)}
        >
          <span className="day-number">Day 1</span>
          <span className="project-name">Business Card</span>
          <span className="arrow">→</span>
        </Link>

        <Link 
          to="/grade_calculator" 
          className={`nav-link ${activeLink === 'grade' ? 'active' : ''}`}
          onMouseEnter={() => setActiveLink('grade')}
          onMouseLeave={() => setActiveLink(null)}
        >
          <span className="day-number">Day 2</span>
          <span className="project-name">Grade Calculator</span>
          <span className="arrow">→</span>
        </Link>
      </nav>
    </div>
  )
}

export default Home
