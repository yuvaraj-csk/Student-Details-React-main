import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="icon">
        <img src='photo.png' alt="eye" />
        </div>
        <h2 className="name">Name: Yuvaraj B</h2>
        <p className="registration">Registration No: 212221040187</p>
        <button className="button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            Status:Student 
            Place:Kanchipuram
          </div>
        )}
      </div>
    </div>
  );
};

export default App;