import React, { useState, useEffect } from 'react'

function PageMouseMove () {
  const [coordinateX, setCoordX] = useState(0)
  const [coordinateY, setCoordY] = useState(0)

  const onMove = (e) => {
    setCoordX(e.offsetX)
    setCoordY(e.offsetY)
    // console.log(e.offsetX)
  }

  useEffect(() => {
    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  })

  return (
    <div>
      <h2>Координаты offsetX</h2>
      <h4>{coordinateX}</h4>
      <h2>Координаты offsetY</h2>
      <h4>{coordinateY}</h4>
    </div>
  )
}

export default PageMouseMove
