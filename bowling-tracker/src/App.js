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
  setPlayers([...players, { name: `Player ${players.length + 1}`, scores: [], isEditing: false }])
};


const toggleEditMode = (index) => {
  const newPlayers = [...players];
  newPlayers[index].isEditing = true;
  newPlayers[index].tempName = newPlayers[index].name;
  setPlayers(newPlayers);
};

const handleNameChange = (index, newName) => {
  const newPlayers = [...players];
  newPlayers[index].tempName = newName;
  setPlayers(newPlayers);
};

const submitNameChange = (index) => {
  const newPlayers = [...players];
  newPlayers[index].name = newPlayers[index].tempName;
  newPlayers[index].isEditing = false;
  setPlayers(newPlayers);
};

  return (
  <div className="App">
      <h1>Bowling Score Tracker</h1>
      <table>
        <thead>
          <tr>
            {players.map((player, index) => (
              <th key={index}>
                {player.isEditing ? (
                  <>
                  <input
                    type="text"
                    value={player.tempName}
                    onChange={(e) => handleNameChange(index, e.target.value)}
                  />
                <button onClick={() => submitNameChange(index)}>
                  Save
                </button>
                  </>
                ) : (
                  <>
                    <span>{player.name}</span>
                    <button onClick={() => toggleEditMode(index)}>
                      Edit
                    </button>
                  </>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {players.map((player, index) => (
              <td key={index}>
                <ScoreInput onAddScore={(score) => addScore(index, score)} />
              </td>
            ))}
          </tr>
          <tr>
            {players.map((player, index) => (
              <td key={index}>
                {player.scores.map((score, scoreIndex) => (
                  <div key={scoreIndex}>{score}</div>
                ))}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <button onClick={addPlayer}>
        Add Player
      </button>
    </div>
  );
}

export default App;
