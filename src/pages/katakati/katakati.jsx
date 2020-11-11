import { useState } from "react";

import PlayerBoard from "../../components/tic-tac-toe/board/boardPlayer";
import BoardAI from "../../components/tic-tac-toe/board/boardAI";

import "./katakati.scss";

const KataKati = () => {
  const [value, setValue] = useState(null);

  return (
    <div className="katakati-container">
      <fieldset className="option-field">
        <legend>Choose your partner</legend>
        <label className="option-1">
          <input
            type="radio"
            value="player"
            checked={value === "player"}
            onChange={(e) => setValue(e.target.value)}
          />
          Player 2
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="ai"
            checked={value === "ai"}
            onChange={(e) => setValue(e.target.value)}
          />
          Bot
        </label>
      </fieldset>

      {value === "player" ? (
        <PlayerBoard />
      ) : value === "ai" ? (
        <BoardAI />
      ) : null}
    </div>
  );
};

export default KataKati;
