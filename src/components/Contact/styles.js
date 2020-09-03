import styled from 'styled-components'
import { device } from '../styles/Generals'

export const ContainerContact = styled.section`
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 180px);
  margin: 0 20px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  && > h3{
    width: 100%;
    margin-bottom: 20px;
  }
  @media ${device.laptop}{
    flex-direction: column;
    flex-wrap: nowrap;
    max-height: none;
    && > h3{
      margin-top: 20px;
    }
  }
  @media ${device.tablet}{
    margin: 0 16px;
    && > h3{
      margin: 16px 0;
    }
  }
  @media ${device.tablet}{
    && > h3{
      font-size: 22px;
    }
  }
`

export const ContainerForm = styled.div`
  width: 50%;
  padding-right: 20px;
  @media ${device.laptop}{
    width: 100%;
    padding-right: 0;
  }
`

export const ContainerInformation = styled.div`
  width: 50%;
  padding-left: 20px;
  @media ${device.laptop}{
    width: 100%;
    padding-left: 0;
    margin: 40px 0;
    display: flex;
    flex-wrap: wrap;
  }
  @media ${device.tablet}{
    margin: 32px 0 86px 0;
  }
  @media (max-width: 500px){
    flex-direction: column;
    align-items: center;
    && .social-networks > a{
      margin: 0 16px;
    }
  }
`

export const ContainerPhone = styled.div`
  width: 100%;
  @media ${device.laptop}{
    width: 50%;
  }
  @media (max-width: 500px){
    width: 100%;
    text-align: center;
  }
`

export const ContainerEmail = styled.div`
  width: 100%;
  @media ${device.laptop}{
    width: 50%;
  }
  @media (max-width: 500px){
    width: 100%;
    text-align: center;
  }
`

export const LinkInfo = styled.a`
  display: block;
  margin: 16px 0 40px 0;
  text-decoration: none;
  @media ${device.tablet}{
    margin: 0 0 32px 0;
  }
`

export const AntiSpam = styled.span`
  display: none;
`
