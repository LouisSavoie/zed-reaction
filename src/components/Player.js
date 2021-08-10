import { useState } from 'react'

function Player() {

  const [position, setPosition] = useState(0,0)
  const [vitals, setVitals] = useState({ health: 100, hunger: 100, thirst: 100 })
  const [inventory, setInventory] = useState([])
  const [equipped, setEquipped] = useState({ hands: { name: "Empty", damage: 0 } })

  return (
    <div className="player">

      <div id="vitals" className="info-frame">
        <h3>Vitals</h3>

        <div className="vital row">
          <p className="col">Health</p>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: vitals.health + "%", backgroundColor: "red"}} aria-valuenow={vitals.health} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="vital row">
          <p className="col">Hunger</p>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: vitals.hunger + "%", backgroundColor: "green"}} aria-valuenow={vitals.hunger} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="vital row">
          <p className="col">Thirst</p>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: vitals.thirst + "%", backgroundColor: "blue"}} aria-valuenow={vitals.thirst} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

      </div>

      <div id="equipment" className="info-frame">
        <h3>Equipment</h3>

        <div id="hands" className="slot row">
          <div className="col">
            <p>Hands</p>
          </div>
          <div className="col text-center">
            <p>{equipped.hands.name}</p>
          </div>
        </div>

      </div>

      <div id="inventory" className="info-frame">
        <h3>Inventory</h3>

        <ul id="player-items">
          {inventory.map((item) => (
            <li>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Player;