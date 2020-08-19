import React from 'react'
import { SingleBlog } from '../../components/SingleBlog'
import { TextPost } from '../../components/SingleBlog/styles'
import { CodeBlock } from '../../components/Generals/CodeBlock'
import loadable from '@loadable/component'
const Bookmark = loadable(() => import('../../components/Generals/Bookmark'))

const exampleCode = ` 
  <html>
    <code>
      </h1>Hola</h1>
    </code>
  </html>
`

export default function QueEsReact () {
  return (
    <SingleBlog
      img='porque-react.jpg'
      title='Por qué Utilizar React?'
    >
      <TextPost>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
        amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
        Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
      </TextPost>
      <TextPost>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
        amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
        Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit amet luctus.
        Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat. Pellentesque
        fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
      </TextPost>
      <TextPost>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
        amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
        Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
      </TextPost>
      <TextPost>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu ligula sit
        amet luctus. Vestibulum ac venenatis urna. Curabitur interdum ultricies metus venenatis feugiat.
        Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a rutrum.
      </TextPost>
      <Bookmark url='https://es-la.facebook.com/' />
      <Bookmark url='https://www.youtube.com/watch?v=3hOgEcGAhDs' />
      <CodeBlock exampleCode={exampleCode} />
    </SingleBlog>
  )
}
