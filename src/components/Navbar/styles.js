import styled from 'styled-components'
import { Link } from 'gatsby'

export const ContainerMenuVertical = styled.div`
  height: 402.433px;
  width: 52px;
  position: relative;
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
`

export const StyledLink = styled(Link)`
  display:flex;
  align-items: center;
  text-decoration: none;
  &&:nth-child(2){
    margin: 0 20px;
  }
  &&.active > div{
    background-color: ${({ theme }) => theme.colors.yellow};
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
`

export const ContainerIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  position: relative;
`

export const TextMenu = styled.p`
  font-size: ${({ size = '16px' }) => size};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  padding-left: 10px;
  transition: all 0.15s linear;
`
export const Line = styled.hr`
  width: 0px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.outstanding};
  margin: 0 0 0 10px;
  border: none;
  transition: all 0.15s linear;
`
