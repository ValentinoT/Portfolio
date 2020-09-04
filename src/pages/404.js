import React from 'react'
import { SEO } from '../components/SEO'
import { NotFound } from '../components/NotFound'

export default function NotFoundPage () {
  return (
    <>
      <SEO title='404 página no encontrada' />
      <NotFound />
    </>
  )
}
