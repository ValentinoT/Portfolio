import { useState, useEffect } from 'react'

const getWidth = () => {
  const { innerWidth: width } = window
  return width
}

export const useWidth = () => {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return [width]
}
