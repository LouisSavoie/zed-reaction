import { useState } from 'react'
import Player from "./components/Player";
import House from "./components/House";
import ZedHere from "./components/ZedHere";

function App() {

  const [houses, setHouses] = useState({})
  const [zed, setZed] = useState({})
  const [map, setMap] = useState([[{}]])

  return (
    <div id="app" className="container">
      <h1>Zed Reaction</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <Player />
          </div>
          <div className="col">
            <ZedHere />
            <House />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
