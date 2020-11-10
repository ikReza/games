const {
  default: Board,
} = require("../../components/tic-tac-toe/withPlayer/board");
const {
  default: BoardAI,
} = require("../../components/tic-tac-toe/withAI/boardAI");

const KataKati = () => {
  return (
    <div>
      <Board />
      <BoardAI />
    </div>
  );
};

export default KataKati;
