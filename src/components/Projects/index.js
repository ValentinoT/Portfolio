import React from 'react'
import { useWidth } from '../../hooks/useWidth'
import { CarrouselProjects } from '../CarrouselProjects'
import { ListProjects } from '../ListProjects'

export default function Projects () {
  const [width] = useWidth()
  return (
    <>
      {
        width > 768
          ? <CarrouselProjects />
          : <ListProjects />
      }
    </>
  )
}
