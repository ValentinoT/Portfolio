import React from 'react'
import loadable from '@loadable/component'
const CarrouselProjects = loadable(() => import('../components/CarrouselProjects'))

export default function index () {
  return (
    <>
      <CarrouselProjects />
    </>
  )
}
