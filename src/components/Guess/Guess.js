import React from "react";

function Guess({ guess }) {

  function renderLetters() {
    let result = [];
    const letters = guess.length > 0 ? guess.split('') : [];
    for (let i = 0; i < 5; i++) {
      const letter = i < letters.length ? letters[i] : '';
      result.push (
        <span key={i} className="cell">{letter}</span>
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
