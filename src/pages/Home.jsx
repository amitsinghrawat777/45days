import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to 45 days of Fullstack Development challenge</h1>
      <h2>by Amit Rawat</h2>
      
      <nav className="navigation">
        <Link to="/business_card" className="nav-link">Day-1 Business_Card</Link><br />
        <Link to="/grade_calculator" className="nav-link">Day-2 Grade_Calculator</Link>
      </nav>
    </div>
  )
}

export default Home
