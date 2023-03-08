import React from "react";
import { checkGuess } from '../../game-helpers';

function Guess({ answer, guess }) {

  const guessResult = checkGuess(guess, answer);

  function renderLetters() {
    let result = [];
    const letters = guess.length > 0 ? guess.split('') : [];
    for (let i = 0; i < 5; i++) {
      const letter = i < letters.length ? letters[i] : '';
      const className = i < letters.length ? `cell ${guessResult[i].status}` : 'cell';
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
