import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess/Guess";

function Guesses({ guesses }) {

  const allGuesses = range(NUM_OF_GUESSES_ALLOWED);

  function renderGuesses() {
    let result = [];
    for (let i = 0; i < allGuesses.length; i++) {
      const g = i < guesses.length ? guesses[i] : { id: i, guess: '' };
      result.push(
        <Guess key={g.id} guess={g.guess} />
      );
    }
    return result;
  }

  return (
    <div className="guess-results">
      {renderGuesses()}
    </div>
  );
}

export default Guesses;
