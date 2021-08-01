function House() {
  return (
    <div className="house">
      <div id="house" className="info-frame">
        <h3>House</h3>
        <button id="barricade">Barricade</button>
        <button id="search">Search</button>
        <div id="found-items" className="list">
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

export default House;