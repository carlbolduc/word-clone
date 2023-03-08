import React, { useState } from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guesses from '../Guesses/Guesses';
import ResultBanner from '../ResultBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [won, setWon] = useState(false);

  const gameEnded = won || guesses.length === NUM_OF_GUESSES_ALLOWED;

  function saveGuess(guess) {
    const newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
  }
  return (
    <>
      <Guesses answer={answer} guesses={guesses} win={() => setWon(true)} />
      <GuessInput disabled={gameEnded} saveGuess={saveGuess} />
      {gameEnded && <ResultBanner answer={answer} guesses={guesses} won={won} />}
    </>
  );
}

export default Game;
