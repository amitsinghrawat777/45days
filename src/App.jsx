import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BusinessCard from "./components/BusinessCard"
import GradeCalculator from "./pages/GradeCalculator"

function App() {
  return (
    <Router>
      <div >
        <Routes>
          {/* Make sure this exact path matches the Link path */}
          <Route path="/business_card" element={<BusinessCard />} />
          <Route path="/" element={<Home />} />
          <Route path="/grade_calculator" element={<GradeCalculator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
