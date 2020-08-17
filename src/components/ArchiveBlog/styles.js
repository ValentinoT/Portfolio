import styled from 'styled-components'
import { device } from '../styles/Generals'

export const ContainerBlog = styled.section`
  width: 100%;
  margin: 0 20px 0 120px;
  @media ${device.tablet}{
    margin: 16px 16px 86px 16px;
  }
`

export const GridPost = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  margin-top: 20px;
  @media ${device.laptop}{
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet}{
    grid-template-columns: repeat(1, 1fr);
  }
`

export const LastPostContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  && a{
    text-decoration: none; 
  }
  @media ${device.tablet}{
    grid-column-end: 2;
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
  @media ${device.mobileL}{
    height: 250px;
  }
  @media ${device.mobileM}{
    height: 225px;
  }
  @media ${device.mobileS}{
    height: 200px;
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
  @media ${device.tablet}{
    font-size: 16px;
  }
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
  @media ${device.mobileL}{
    text-align: left;
  }
`
