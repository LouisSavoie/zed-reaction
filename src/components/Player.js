function Player() {
  return (
    <div className="player">

      <div id="vitals" className="info-frame">
        <h3>Vitals</h3>

        <div className="vital row">
          <p className="col">Health</p>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: "80%", backgroundColor: "red"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="vital row">
          <p className="col">Hunger</p>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: "50%", backgroundColor: "green"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>

        <div className="vital row">
          <p className="col">Thirst</p>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: "75%", backgroundColor: "blue"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
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
            <p>Rifle</p>
          </div>
        </div>

      </div>

      <div id="inventory" className="info-frame">
        <h3>Inventory</h3>

        <ul id="player-items">
          <li>
            <p>Food</p>
          </li>
          <li>
            <p>Food</p>
          </li>
          <li>
            <p>Food</p>
          </li>
          <li>
            <p>Water</p>
          </li>
          <li>
            <p>Water</p>
          </li>
          <li>
            <p>Water</p>
          </li>
          <li>
            <p>Bandage</p>
          </li>
          <li>
            <p>Bandage</p>
          </li>
          <li>
            <p>Bandage</p>
          </li>
          <li>
            <p>Tools</p>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default Player;