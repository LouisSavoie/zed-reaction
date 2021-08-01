function Player() {
  return (
    <div className="player">
      <div id="vitals" className="info-frame">
        <h3>Vitals</h3>
        <div className="vital">
          <p>Health</p>
          <p>100</p>
        </div>
        <div className="vital">
          <p>Hunger</p>
          <p>100</p>
        </div>
        <div className="vital">
          <p>Thirst</p>
          <p>100</p>
        </div>
      </div>
      <div id="equipment" className="info-frame">
        <h3>Equipment</h3>
        <div id="hands" className="slot">
          <p>Hands</p>
          <p>Rifle</p>
        </div>
      </div>
      <div id="inventory" className="info-frame">
        <h3>Inventory</h3>
        <div id="player-items" className="list">
          <div className="item">
            <p>Food</p>
          </div>
          <div className="item">
            <p>Water</p>
          </div>
          <div className="item">
            <p>Bandage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;