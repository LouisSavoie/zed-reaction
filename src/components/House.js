function House() {
  return (
    <div className="house">
      <div id="house" className="info-frame">
        <div className="row">
          <div className="col">
            <h3>House</h3>
          </div>
          <div className="col align-self-center text-center">
            <i id="search-button" className="btn fas fa-search fs-2" role="button" aria-disabled="false"></i>
            <i id="barricade-button" className="btn fas fa-hammer fa-flip-horizontal fs-2 pe-3" role="button" aria-disabled="false"></i>
          </div>
        </div>
        
        <ul id="found-items">
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
            <p>Bandage</p>
          </li>
          <li>
            <p>Bandage</p>
          </li>
          <li>
            <p>Bandage</p>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default House;