import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle } from '../../components/Single/styles'
import { HTML5 } from '../../icons/HTML5'
import { CSS3 } from '../../icons/CSS3'
import { Javascript } from '../../icons/Javascript'
import { SEO } from '../../components/SEO'

export default function proycto1 () {
  return (
    <>
      <SEO title='Proyecto 1' />
      <Single
        title='Proyecto 1'
        icons={[<HTML5 />, <CSS3 />, <Javascript />]}
        urlProject='https://portfolio.valentinot.vercel.app'
        urlRepository='https://github.com/ValentinoT/Portfolio'
      >
        <TextSingle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
          amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
          Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
        </TextSingle>
        <TextSingle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
          amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
          Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit amet luctus.
          Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat. Pellentesque
          fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
        </TextSingle>
      </Single>
    </>
  )
}
