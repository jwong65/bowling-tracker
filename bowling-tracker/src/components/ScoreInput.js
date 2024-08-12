import React from 'react'
import { useState } from 'react'

export default function ScoreInput({onAddScore}) {
    const [score, setScore] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddScore(parseInt(score)); 
        // This is to convernt anything to integer.

        setScore('')
      };
    
  return (
    <form onSubmit={handleSubmit}>
        <input
            value={score}
            onChange={(e)=> setScore(e.target.value)}
        />
        <button type='submit'>Submit</button>      
    </form>
  )
}
