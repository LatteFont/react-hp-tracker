import "./App.css";
import PlayersList from "./components/PlayersList";
import Title from "./components/Title.";

function App() {
  return (
    <div className="app">
      <div>
        <Title />
      </div>
      <div>
        <PlayersList />
      </div>
    </div>
  );
}

export default App;
