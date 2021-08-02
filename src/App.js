import Player from "./components/Player";
import House from "./components/House";
import Zed from "./components/Zed";

function App() {
  return (
    <div id="app" className="container">
      <h1>Zed Reaction</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Player />
          </div>
          <div className="col">
            <Zed />
            <House />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
