import React from 'react'
import { ArchiveBlog } from '../../components/ArchiveBlog'
import { SEO } from '../../components/SEO'

export default function index () {
  return (
    <>
      <SEO title='Blog' />
      <ArchiveBlog />
    </>
  )
}
