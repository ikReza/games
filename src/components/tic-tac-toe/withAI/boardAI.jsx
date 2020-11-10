import React, { useState, useEffect } from "react";
import { calculateWinner } from "../board.utlis";

import Square from "./square/square";

import "./boardAI.scss";

const BoardAI = () => {
  const [squares, setSquares] = useState([]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [human, setHuman] = useState(true);
  // const [remaining, setRemaining] = useState([]);

  useEffect(() => {
    newGame();
    return () => {};
  }, []);

  useEffect(() => {
    if (!human) {
      setTimeout(aiAction, 500);
    }
    return () => {};
  }, [human]);

  const newGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const player = () => {
    return xIsNext ? "X" : "O";
  };

  const action = (i) => {
    if (!squares[i]) {
      squares.splice(i, 1, player());
      setXIsNext(!xIsNext);
      setHuman(!human);
    }
  };

  const aiAction = () => {
    let remaining = [];
    squares.forEach((val, i) => {
      !val && remaining.push(i);
    });
    //generate random value
    let index = remaining[Math.floor(Math.random() * remaining.length)];
    action(index);
  };

  const makeMove = (i) => {
    action(i);

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

export default BoardAI;
