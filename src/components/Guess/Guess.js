import React, { useEffect, useState } from "react";
import { checkGuess } from '../../game-helpers';

function Guess({ answer, guess, win }) {
  const [guessResult, setGuessResult] = useState([]);

  useEffect(() => {
    if (guess && answer) {
      const gr = checkGuess(guess, answer);
      setGuessResult(gr);
    }
  }, [guess, answer]);

  useEffect(() => {
    if (guessResult && guessResult.filter(r => r.status === 'correct').length === 5) {
      win();
    }
  }, [guessResult]);

  function renderLetters() {
    let result = [];
    const letters = guess.length > 0 ? guess.split('') : [];
    for (let i = 0; i < 5; i++) {
      const letter = i < letters.length ? letters[i] : '';
      const className = i < letters.length && i < guessResult.length ? `cell ${guessResult[i].status}` : 'cell';
      result.push (
        <span key={i} className={className}>{letter}</span>
      );
    }
    return result;
  }

  return (
    <p className="guess">
      {renderLetters()}
    </p>
  );
}

export default Guess;
