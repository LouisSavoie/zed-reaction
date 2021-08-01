import Player from "./components/Player";
import House from "./components/House";
import Zed from "./components/Zed";

function App() {
  return (
    <div className="App">
      <h1>Zed Reaction</h1>
      <Zed />
      <House />
      <Player />
    </div>
  );
}

export default App;
