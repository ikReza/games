import React, { useState, useEffect } from "react";

import Square from "../square/square";
import { calculateWinner } from "../board.utlis";

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

  const makeMove = (i) => {
    if (!squares[i]) {
      squares.splice(i, 1, player());
      // squares[i] = player();
      setXIsNext(!xIsNext);
    }
    setWinner(calculateWinner(squares));
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
