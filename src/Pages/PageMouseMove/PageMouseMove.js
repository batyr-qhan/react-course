import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToStore } from './_actions/PageMouseMoveActions'

function PageMouseMove () {
  const dispatch = useDispatch()

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    const mouseMove = ({ offsetX, offsetY }) => {
      addToStore({ offsetX, offsetY })(dispatch)
      setOffsetX(offsetX)
      setOffsetY(offsetY)
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [dispatch])
  return (
    <div>
      X - {offsetX}, Y - {offsetY}
    </div>
  )
}

export default PageMouseMove
