import { useState } from 'react'

function ZedHere() {

  const [here, setHere] = useState([])

  return (
    <div className="zed">
      <div id="zed" className="info-frame">
        <h3>Zed</h3>

        <ul id="zed-here">
          {here.map((zed) => (
            <li>
              <p>{zed.name}</p>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default ZedHere;