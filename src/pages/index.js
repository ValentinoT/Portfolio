import React from 'react'
import loadable from '@loadable/component'
const Projects = loadable(() => import('../components/Projects'))

export default function index () {
  return (
    <>
      <Projects />
    </>
  )
}
