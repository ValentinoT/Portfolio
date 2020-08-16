import styled from 'styled-components'
import { device } from '../styles/Generals'
import { zoom } from '../styles/animations'

export const Overlay = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const ContainerPopUp = styled.div`
  width: 700px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;
  padding: 20px;
  position: relative;
  ${zoom({ time: '.15s', type: 'linear' })};
  @media ${device.tablet}{
    margin: 0 16px;
  }
`

export const ButtonClose = styled.div`
  position: absolute;
  top: 0; 
  right: 0;
  width: auto;
  background: none;
  border: none;
  padding: 0;
  margin: 16px 16px 0 0;
  cursor: pointer;
`
