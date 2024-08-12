import { useState } from "react";
import ScoreInput from "./components/ScoreInput";

import './App.css'

function App() {
const [scores, setScores] = useState([]);

const addScore = (score) => {
  setScores([...scores, score]);
};

  return (
    <div className="App">
      <h1>Bowling Score Tracker</h1>
      <ScoreInput onAddScore={addScore} />
      <h2>Scores</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{score}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

