import { useState } from "react";
import ScoreInput from "./components/ScoreInput";

import './App.css'

function App() {
const [scores, setScores] = useState([]);
const [players, setPlayers] = useState([
  {name:'Player 1', scores:[]},
  {name: 'Player 2', scores:[]}
])

const addScore = (playerIndex, score) => {
  const newPlayers = [...players];
  newPlayers[playerIndex].scores.push(score);
  setPlayers(newPlayers);
};


const addPlayer = (name) => {
  setPlayers([...players, { name, scores: [] }]);
};

  return (
  <div className="App">
      <h1>Bowling Score Tracker</h1>


      {players.map((player, index) => (
    <div key={index}>
      <h2>{player.name}</h2>
      <ScoreInput onAddScore={(score) => addScore(index, score)} />
      <ul>
        {player.scores.map((score, scoreIndex) => (
          <li key={scoreIndex}>{score}</li>
        ))}
      </ul>
    </div>
    ))}
    {/* Adds a new player that's just extending the array */}
      <button onClick={() => addPlayer(`Player ${players.length + 1}`)}>
        Add Player
      </button>
  </div>
  );
}

export default App;
