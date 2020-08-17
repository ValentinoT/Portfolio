import styled, { css } from 'styled-components'
import { device } from '../styles/Generals'

export const MyHeader = styled.header`
  padding: 20px;
  display: flex;
  @media ${device.tablet}{
    padding: 16px;
    flex-wrap: wrap;
  }
  ${({ blog, singleBlog }) => (blog || singleBlog) && css`
    min-height: 120px;
    && .containerImage{
      position: fixed;
    }
    @media ${device.tablet}{
      min-height: auto;
      && .containerImage{
        position: relative;
    }
    }
  `}
  
`

export const ContainerImage = styled.div`
  width: 80px;
  height: 80px;
  background: #ffffff;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
  @media ${device.tablet}{
    width: 64px;
    height: 64px;
  }
  @media ${device.mobileL}{
    width: 48px;
    height: 48px;
  }
`
export const ContainerText = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  ${({ about, contact, blog, singleBlog }) => (about || contact || blog || singleBlog) && css`
    align-self: center;
  `}
  ${({ blog, singleBlog }) => (blog || singleBlog) && css`
    margin-left: 80px;
    @media ${device.tablet}{
      margin-left: 0;
    }
  `}
  @media ${device.tablet}{
    padding: 0 16px;
    align-self: center;
    && p{
      display: none;
    }
  }
`
export const ContainerTextTablet = styled.div`
  display: none;
  order: 1;
  width: 100%;
  @media ${device.tablet}{
    display: block;
  }
  @media ${device.mobileL}{
    display: none;
  }
`
export const ContainerTextMovile = styled.div`
  display: none;
  order: 1;
  width: 100%;
  @media ${device.mobileL}{
    display: block;
  }
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
