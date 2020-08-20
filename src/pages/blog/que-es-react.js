import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle } from '../../components/Single/styles'
import { Bookmark } from '../../components/Generals/Bookmark'
import { CodeBlock } from '../../components/Generals/CodeBlock'

const exampleCode = ` 
  <html>
    <code>
      </h1>Hola</h1>
    </code>
  </html>
`

export default function QueEsReact () {
  return (
    <Single
      img='porque-react.jpg'
      title='Por qué Utilizar React?'
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
      <TextSingle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
        amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
        Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
      </TextSingle>
      <TextSingle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
        amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
        Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
      </TextSingle>
      <Bookmark url='https://es-la.facebook.com/' />
      <Bookmark url='https://www.youtube.com/watch?v=3hOgEcGAhDs' />
      <CodeBlock exampleCode={exampleCode} />
    </Single>
  )
}
