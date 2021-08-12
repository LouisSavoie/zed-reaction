import { useState } from 'react'

function Zed() {

  const [position, setPosition] = useState(0,0)
  const [health, setHealth] = useState(100)
  const [damage, setDamage] = useState(Math.floor(Math.random() * 25))

  return (
    <></>
  )
}

export default Zed;