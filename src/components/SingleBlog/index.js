import React from 'react'
import { ContainerSingleBlog, PostWidth, ContainerImagePost, TitlePost } from './styles'
import { Image } from '../Image'

export const SingleBlog = ({ children, img, title }) => {
  return (

    <ContainerSingleBlog>
      <PostWidth>
        <ContainerImagePost>
          <Image name={img} />
        </ContainerImagePost>
        <TitlePost>{title}</TitlePost>
        {children}
      </PostWidth>
    </ContainerSingleBlog>
  )
}
