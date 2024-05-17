import React, { useState } from "react";
import "./index.css";

function App() {
  const [isRight, setIsRight] = useState(false);

  const togglePosition = () => {
    setIsRight(!isRight);
  };

  return (
    <>
      <h1>Random Quotes Generator</h1>
      <div className="outer-container">
        <div
          className={`inner-container ${isRight ? "move-right" : "move-left"}`}
        >
          <div className="content">
            {isRight
              ? "The way to get started is to quit talking and begin doing.  -Walt Disney"
              : "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"}
          </div>
          <button className="toggle-button" onClick={togglePosition}>
            NEXT
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
