import styled from 'styled-components'

export const ContainerBlog = styled.section`
  width: 100%;
  margin: 0 20px 0 120px;
`

export const GridPost = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-top: 20px;
`

export const LastPostContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  && a{
    text-decoration: none; 
  }
`
export const PostContainer = styled.div`
  width: 100%;
  && a{
    text-decoration: none; 
  }
`

export const ContainerImage = styled.div`
  width: 100%;
  height: 275px;
  border-radius: 5px;
  overflow: hidden;
  && .gatsby-image-wrapper{
    height: 280px;
  }
`
export const HeaderCardPost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`

export const TitlePost = styled.h4`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  font-weight: 500;
  transition: all 0.15s linear;
  flex-grow: 1;
  margin-right: 10px;
  text-decoration: none;
`

export const DatePost = styled.time`
  color: ${({ theme }) => theme.colors.title};
  font-size: 10px;
  font-weight: 300;
  transition: all 0.15s linear;
  text-align: right;
  line-height: 14px;
`

export const ExtractPost = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  transition: all 0.15s linear;
  line-height: 20px;
  text-align: justify;
`
