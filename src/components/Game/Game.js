import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import GuessInput from '../GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function saveGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
  }
  return (
    <>
      <div className="guess-results">
        {guesses.map(g => (
          <Guess key={g.id} guess={g.guess} />
        ))}
      </div>
      <GuessInput saveGuess={saveGuess} />
    </>
  );
}

export default Game;
