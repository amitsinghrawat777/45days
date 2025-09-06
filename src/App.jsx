import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import BusinessCard from "./components/BusinessCard"
import GradeCalculator from "./pages/GradeCalculator"
import SkillManager from "./pages/SkillManager"
import Counter from "./pages/counter"

function App() {
  return (
    <Router>
      <div >
        <Routes>
          {/* Make sure this exact path matches the Link path */}
          <Route path="/business_card" element={<BusinessCard />} />
          <Route path="/" element={<Home />} />
          <Route path="/grade_calculator" element={<GradeCalculator />} />
          <Route path="/day4" element={<SkillManager />} />
          <Route path="/day5" element={<Counter />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
