import styled from 'styled-components'
import { device } from '../styles/Generals'

export const ContainerNotFound = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 100px;
  @media ${device.tablet}{
    margin-right: 0;
    padding: 0 16px 54px 16px;
  }
`

export const Title404 = styled.h3`
  color: ${({ theme }) => theme.colors.title404};
  font-size: 256px;
  font-weight: 800;
  transition: all 0.15s linear;
  @media ${device.tablet}{
    font-size: 156px;
  }
  @media ${device.mobileM}{
    font-size: 128px;
  }
`

export const Text404 = styled.h6`
  color: ${({ theme }) => theme.colors.title};
  font-size: 24px;
  font-weight: 600;
  transition: all 0.15s linear;
  margin-bottom: 40px;
  text-align: center;
  @media ${device.tablet}{
    font-size: 18px;
  }
  @media ${device.mobileL}{
    font-size: 16px;
    font-weight: 400;
  }
`
