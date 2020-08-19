import styled from 'styled-components'
import { device } from '../../styles/Generals'

export const ContainerBookmark = styled.a`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  text-decoration: none;
  overflow: hidden;
  align-items: center;
  transition: all 0.15s linear;
  margin: 10px 0;
  &&:hover{
    background-color: rgba(255,255,255, .1);
  }
`

export const ContainerText = styled.div`
  width: calc(100% - 250px);
  flex-shrink: 0;
  padding: 10px;
  @media (${device.tablet}){
    width: calc(100% - 150px);
  }
  @media (max-width: 500px){
    width: 100%;
  }
`

export const TitleSite = styled.h6`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
`

export const DescriptionSite = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  line-height: 20px;
  padding: 10px 0;  
`

export const ContainerLink = styled.div`
  display: flex;
  align-items: center;
`

export const Favicon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
  object-position: center center;
  margin-right: 10px;
`

export const Url = styled.p`
  flex-grow: 1;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.title};
  font-size: 12px;
`

export const ContainerImagePage = styled.div`
  background-image: url(${({ src }) => src});
  width: 250px;
  background-position: center center;
  background-repeat: no-repeat;
  align-self: stretch;
  background-size: cover;
  @media (${device.tablet}){
    width: 150px;
  }
  @media (max-width: 500px){
    display: none;
  }
`
