import "./board.scss";

const BoardTemplate = ({ winner, player, newGame, children }) => {
  return (
    <div className="board-container">
      <span className="board-title">
        {winner ? `Winner: ${winner}` : `Turn: ${player()}`}
      </span>
      <main>{children}</main>
      <button onClick={newGame} className="btn-new-game">
        New Game
      </button>
    </div>
  );
};

export default BoardTemplate;
