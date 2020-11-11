import { useState, useEffect } from "react";

import { calculateWinner } from "./board.utlis";
import BoardTemplate from "./boardTemplate";
import Square from "../square/square";

import "./board.scss";

const PlayerBoard = () => {
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
    <BoardTemplate winner={winner} player={player} newGame={newGame}>
      {squares.map((val, i) => (
        <Square key={i} value={val} onClick={() => makeMove(i)} />
      ))}
    </BoardTemplate>
  );
};

export default PlayerBoard;
