import styled from 'styled-components'
import { device, SubTitle, Text } from '../styles/Generals'

export const ContainerAbout = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 20px;
  max-height: calc(100vh - 211px);
  @media ${device.laptop}{
    flex-direction: column;
    max-height: none;
    margin: 0 20px;
  }
  @media ${device.tablet}{
    margin: 0 16px;
  }
`

export const ContainerText = styled.div`
  width: 50%;
  margin-right: 20px;
  @media ${device.laptopL}{
    width: 60%;
  }
  @media ${device.laptop}{
    width: 100%;
    margin: 20px 0 0 0;
  }
  @media ${device.tablet}{
    margin: 16px 0 0 0;
  }
`

export const TitleAbout = styled(SubTitle)`
  @media ${device.laptop}{
    font-size: 18px;
  }
  @media (max-width: 792px){
    font-size: 16px;
  }
  @media ${device.tablet}{
    font-size: 20px;
  }
  @media ${device.mobileL}{
    font-size: 18px;
  }
`

export const TextAbout = styled(Text)`
  @media (max-width: 1136px){
    padding: 10px 0;
  }
  @media ${device.laptop}{
    padding: 20px 0
  }
  @media ${device.tablet}{
    font-size: 16px;
    line-height: 28px;
    padding: 16px 0;
  }
  @media ${device.mobileL}{
    font-size: 14px;
    line-height: 24px;
  }
`

export const ContainerImage = styled.div`
  width: 50%;
  margin-left: 20px;
  & .gatsby-image-wrapper{
    max-height: calc(100vh - 211px);
    border-radius: 5px;
  }
  @media ${device.laptopL}{
    width: 40%;
  }
  @media ${device.laptop}{
    width: 100%;
    max-height: none;
    margin: 20px 0;
  }
  @media ${device.tablet}{
    margin: 16px 0 70px 0;
  }
`
