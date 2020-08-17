import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { device } from '../styles/Generals'

export const ContainerMenuVertical = styled.div`
  height: 402.433px;
  width: 100px;
  position: relative;
  flex-shrink: 0;
  @media ${device.tablet}{
    width: 100%;
    height: 54px;
    position: fixed;
    bottom: 0;
    z-index: 10;
    ${({ blog, singleBlog }) => (blog || singleBlog) && css`
    position: fixed;
    top: auto;
    transform: translate(0)
  `}
  }
  ${({ blog, singleBlog }) => (blog || singleBlog) && css`
    position: fixed;
    top: 54%;
    transform: translate(0,-50%)
  `}
`

export const ContainerMenu = styled.nav`
  display: flex;
  width: max-content;
  position: absolute;
  bottom: 0;
  left: 20px;
  transform: rotate(-90deg);
  transform-origin: left top 0;
  margin-bottom: -32px;
  @media ${device.tablet}{
    transform: rotate(0);
    margin-bottom: 0;
    position: initial;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundMenuMobile};
    border-radius: 5px 5px 0 0;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.2));
    flex-direction: row-reverse;
  }
`

export const StyledLink = styled(Link)`
  display:flex;
  align-items: center;
  text-decoration: none;
  &&:nth-child(1){
    display: none;
  }
  &&:nth-child(3){
    margin: 0 20px;
  }
  &&.active > div{
    background-color: ${({ theme }) => theme.colors.yellow};
    box-shadow: 0 2px 13px 0 rgba(247,223,30,.1);
  }
  && svg{
    transition: all 0.15s linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  && .active-icon{
    opacity: 0;
  }
  &&.active .active-icon{
    opacity: 1;
  }
  &&.active .inactive-icon{
    opacity: 0;
  }
  &&.active > p{
    color: ${({ theme }) => theme.colors.outstanding};
  }
  &&.active > hr{
    width: 20px;
  }
  @media ${device.tablet}{
    &&:nth-child(1){
      display: flex;
    }
    &&:nth-child(3){
      margin: 0;
    }
  }
`

export const ContainerIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  position: relative;
  @media ${device.tablet}{
    width: 40px;
    height: 40px;
    && svg{
      width: 25px;
      height: 25px;
    }
  }
`

export const TextMenu = styled.p`
  font-size: ${({ size = '16px' }) => size};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding-left: 10px;
  transition: all 0.15s linear;
  @media ${device.tablet}{
    display: none;
  }
`
export const Line = styled.hr`
  width: 0px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.outstanding};
  margin: 0 0 0 10px;
  border: none;
  transition: all 0.15s linear;
  @media ${device.tablet}{
    display: none;
  }
`
