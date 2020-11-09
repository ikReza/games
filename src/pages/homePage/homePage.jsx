import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      Select any game from below
      <ul>
        <li>
          <Link to="katakati">Tic-Tac-Toe</Link>
        </li>
        <li>
          {" "}
          <Link to="hangman">HangMan</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
