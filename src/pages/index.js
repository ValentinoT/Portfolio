import React from 'react'
import loadable from '@loadable/component'
import { SEO } from '../components/SEO'
const Projects = loadable(() => import('../components/Projects'))

export default function index () {
  return (
    <>
      <SEO title='Proyectos' />
      <Projects />
    </>
  )
}
