import React, { useState } from "react";

function GuessInput({ saveGuess }) {
  const [guess, setGuess] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newGuess = { id: Math.random(), guess: guess };
    saveGuess(newGuess);
    setGuess('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={e => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Z]{5}"
        title="5 letters"
        required={true}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
