import { useState } from 'react'

function House() {

  const [position, setPosition] = useState(0,0)
  const [barricaded, setBarricaded] = useState(false)
  const [inventory, setInventory] = useState([])
  const [found, setFound] = useState([])

  return (
    <div className="house">
      <div id="house" className="info-frame">
        <div className="row">
          <div className="col">
            <h3>House</h3>
          </div>
          <div className="col align-self-center text-center">
            <i id="search-button" className="btn fas fa-search fs-2" role="button" aria-disabled="false"></i>
            {!barricaded ? (
              <i id="barricade-button" className="btn fas fa-hammer fa-flip-horizontal fs-2 pe-3" role="button" aria-disabled="false"></i>
            ) : (
              <i id="barricade-button" className="btn fas fa-hammer fa-flip-horizontal fs-2 pe-3 disabled" role="button" aria-disabled="true"></i>
            )}
          </div>
        </div>
        
        <ul id="found-items">
          {found.map((item) => (
            <li>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default House;