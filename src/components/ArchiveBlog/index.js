import React from 'react'
import { Link } from 'gatsby'
import { ContainerBlog, GridPost, LastPostContainer, PostContainer, ContainerImage, HeaderCardPost, TitlePost, DatePost, ExtractPost } from './styles'
import { SubTitle } from '../styles/Generals'
import { Image } from '../Image'

const LastPost = ({ url, image, title, date, read, extract }) => {
  return (
    <LastPostContainer>
      <Link to={url}>
        <ContainerImage>
          <Image name={image} />
        </ContainerImage>
      </Link>
      <Link to={url}>
        <HeaderCardPost>
          <TitlePost size='18px'>{title}</TitlePost>
          <DatePost>{date}<br />{read}</DatePost>
        </HeaderCardPost>
      </Link>
      <ExtractPost>
        {extract}
      </ExtractPost>
    </LastPostContainer>
  )
}

const Post = ({ url, image, title, date, read, extract }) => {
  return (
    <PostContainer>
      <Link to={url}>
        <ContainerImage>
          <Image name={image} />
        </ContainerImage>
      </Link>
      <Link to={url}>
        <HeaderCardPost>
          <TitlePost size='18px'>{title}</TitlePost>
          <DatePost>{date}<br />{read}</DatePost>
        </HeaderCardPost>
      </Link>
      <ExtractPost>
        {extract}
      </ExtractPost>
    </PostContainer>
  )
}

export const ArchiveBlog = () => {
  return (
    <ContainerBlog>
      <SubTitle size='28px'>Últimos Posts</SubTitle>
      <GridPost>
        <LastPost
          url='/blog/que-es-react'
          image='porque-react.jpg'
          title='Por qué Utilizar React?'
          date='27/07/20'
          read='7 min de lectura'
          extract='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu
          ligula sit amet luctus. Ves tibulum ac venenatis urna. Curabitur interdum ultricies metus
          venenatis feugiat. Pellentesque fermentum dictum euismod. Fusce sodales efficitur lectus a
          rutrum.'
        />
        <Post
          url='/'
          image='que-es-ecmascript.jpg'
          title='Que es Ecmascript?'
          date='27/07/20'
          read='7 min de lectura'
          extract='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu
          ligula sit amet luctus. Vestibulum ac venenatis urna.'
        />
        <Post
          url='/'
          image='asincronismo-javascript.jpg'
          title='Asincronismo en JS'
          date='27/07/20'
          read='7 min de lectura'
          extract='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu
          ligula sit amet luctus. Vestibulum ac venenatis urna.'
        />
        <Post
          url='/'
          image='domina-react-com-1.png'
          title=' React en Colombia'
          date='27/07/20'
          read='7 min de lectura'
          extract='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu
          ligula sit amet luctus. Vestibulum ac venenatis urna.'
        />
        <Post
          url='/'
          image='static-site-ghost-gatsby-js-1.jpg'
          title='Que es Gatsby?'
          date='27/07/20'
          read='7 min de lectura'
          extract='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dignissim eu
          ligula sit amet luctus. Vestibulum ac venenatis urna.'
        />

      </GridPost>
    </ContainerBlog>
  )
}
