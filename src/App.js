import { Switch, Route } from "react-router-dom";

import HangMan from "./pages/hangman/hangman";
import HomePage from "./pages/homePage/homePage";
import KataKati from "./pages/katakati/katakati";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/katakati" component={KataKati} />
      <Route path="/hangman" component={HangMan} />
    </Switch>
  );
}

export default App;
