import styled from 'styled-components'
import { device } from '../styles/Generals'

export const ContainerSingleBlog = styled.section`
  width: 100%;
  margin: 0 20px 0 120px;
  align-self: flex-start;
  @media ${device.tablet}{
    margin: 16px 16px 86px 16px;
  }
`

export const PostWidth = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export const ContainerImagePost = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  && .gatsby-image-wrapper{
    height: 300px;
  }
`

export const TitlePost = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: 28px;
  font-weight: 600;
  padding: 20px 0 10px 0;
`

export const TextPost = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  font-weight: 300;
  line-height: 26px;
  padding: 10px 0;
  text-align: justify;
`
