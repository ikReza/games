import React, { useState, useEffect } from "react";

import Square from "../square/square";

import "./board.scss";

const Board = () => {
  const [squares, setSquares] = useState([]);
  const [xIsNext, setXIsNext] = useState(Boolean);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    newGame();
    return () => {};
  }, []);

  const newGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const player = () => {
    return xIsNext ? "X" : "O";
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // this.isDisabled = true;
        return squares[a];
      }
    }
    return null;
  };

  const makeMove = (i) => {
    if (!squares[i]) {
      squares.splice(i, 1, player());
      setXIsNext(!xIsNext);
    }
    setWinner(calculateWinner());
  };

  return (
    <div>
      {winner ? `Winner: ${winner}` : `Turn: ${player()}`}
      <main>
        {squares.map((val, i) => (
          <Square key={i} value={val} onClick={() => makeMove(i)} />
        ))}
      </main>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default Board;
