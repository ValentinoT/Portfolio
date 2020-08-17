import React from 'react'
import { SingleBlog } from '../../components/SingleBlog'
import { TextPost } from '../../components/SingleBlog/styles'
import { encodeBase64 } from 'react-basecode-sixty-four'

export default function QueEsReact () {
  const base64Credentials = encodeBase64('danieltorresc13@gmail.com:46rfopM4qtRofrUlc6x3')
  const url = 'https://api.urlmeta.org/?url=https://moin.im'

  const response = async () => {
    await window.fetch(url, {
      method: 'GET',
      headers: { Authorization: 'Basic ' + base64Credentials }
    }).then(response => response.json())
      .then(json => console.log(json))
  }
  response()
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
    </SingleBlog>
  )
}
