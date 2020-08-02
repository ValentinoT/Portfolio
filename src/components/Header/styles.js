import styled, { css } from 'styled-components'

export const MyHeader = styled.header`
  padding: 20px;
  display: flex;
`

export const ContainerImage = styled.div`
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
`
export const ContainerText = styled.div`
  flex-grow: 1;
  padding: 0 20px;
`

export const ButtonToggleTheme = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  ::before{
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background-color: #000;
    top: -4px;
    right: -4px;
    border-radius: 50%;
    transition: all 0.15s linear;
  }
  && svg g path{
    transition: all 0.15s linear;
    transform-origin: center;
  }
  ${({ themeMode }) => (themeMode === 'dark') && css`
    ::before{
      top: 6px;
      right: 6px;
    }
    && svg g path {
      opacity: 0;
      transform: scale(0);
    }
    `
  }
`
