import { useState } from "react";
import { Link } from "react-router-dom";

function SkillManager() {
  const [skill, setSkill] = useState('');
  const [skills, setSkills] = useState([]);
  const [level, setLevel] = useState('');

  const addSkill = () => {
    if (skill && level) {
      setSkills([...skills, { name: skill, level }]);
      setSkill('');
      setLevel('');
    }
  };

  const dropSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
      padding: '2rem',
      color: 'white'
    }}>
      <nav style={{
        position: 'absolute',
        top: '20px',
        left: '20px'
      }}>
        <Link to="/" style={{
          color: '#fff',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          fontSize: '1rem'
        }}>
          ← Back to Home
        </Link>
      </nav>

      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '15px',
        padding: '2rem',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>Skills Manager</h1>
        
        <p style={{
          textAlign: 'center',
          color: '#94a3b8',
          marginBottom: '2rem'
        }}>Add your skills below and watch the list grow!</p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <input 
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="e.g., React"
            style={{
              flex: '2',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'white',
              outline: 'none'
            }}
          />
          <select 
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            style={{
              flex: '1',
              padding: '0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'gray',
              outline: 'none'
            }}
          >
            <option value="">Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <button 
            onClick={addSkill}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              background: 'linear-gradient(45deg, #60a5fa, #3b82f6)',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              fontWeight: 'bold'
            }}
          >
            Add
          </button>
        </div>

        <h3 style={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          color: '#e2e8f0'
        }}>Your Skills</h3>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              onClick={() => dropSkill(index)}
              style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>{skill.name}</span>
              <span style={{
                fontSize: '0.8rem',
                padding: '0.2rem 0.5rem',
                background: 'rgba(96, 165, 250, 0.2)',
                borderRadius: '10px',
                color: '#93c5fd'
              }}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillManager;