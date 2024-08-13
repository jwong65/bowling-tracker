import React from 'react'
import { useState, useEffect } from 'react'

// import { sql } from "@vercel/postgres";

export default function ResultsPage() {
  // const { rows } = await sql`SELECT * FROM Scores ORDER BY created_at DESC`;
  const [scores, setScores] = useState([])

  const fetchScores = async () => {
    const res = await fetch('/api/scores');
    const data = await res.json();
    setScores(data);
  };

  useEffect(() => {
    fetchScores();
  }, []);

  return (
    <div>
      <h1>Bowling Scores</h1>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((row) => (
            <tr key={row.id}>
              <td>{row.player_name}</td>
              <td>{row.score}</td>
              <td>{new Date(row.created_at).toLocaleDateString()}</td>
            </tr> 
         ))}
        </tbody>
      </table>
    </div>
  )
}
