import styled from 'styled-components'
import { Link } from 'gatsby'

export const CardProjectContainer = styled(Link)`
  background-color: ${({ theme }) => theme.colors.backgroundCardProject};
  width: 300px;
  height: 80%;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 40px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 10px;
  display: grid;
  grid-template-columns: 150px auto;
  grid-template-rows: 50%;
  column-gap: 10px;
  row-gap: 10px;
  position: relative;
  &&:hover .headerProject{
    opacity: 1;
  }
  &&:hover .footerProject{
    opacity: 1;
  }
`

export const HeaderProject = styled.div`
  background: ${({ theme }) => theme.colors.gradientProjectTop};
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px 5px 0 0;
  z-index: 1;
  opacity: 0;
  transition: all 0.15s linear;
  padding: 10px;
`

export const ContainerHeaderTextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderTitle = styled.h6`
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 600;
`

export const ContainerHeaderIcons = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 5px;
  border-radius: 5px;
  display: flex;
  && div{
    margin: 0 5px;
  }
  && div:first-child{
    margin-left: 0;
  }
  && div:last-child{
    margin-right: 0;
  }
`

export const ContainerImageDesktop = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  grid-column-start: 1;
  grid-column-end: 3;
`

export const ContainerImageTablet = styled.div`
  border-radius: 5px;
  overflow: hidden;
`

export const ContainerImageMobile = styled.div`
  border-radius: 5px;
  overflow: hidden;
`

export const FooterProject = styled.div`
  background: ${({ theme }) => theme.colors.gradientProjectBottom};
  width: 100%;
  height: 125px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-radius: 0 0 5px 5px;
  z-index: 1;
  opacity: 0;
  transition: all 0.15s linear;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
`

export const TitleProject = styled.h3`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: 600;
`

export const ShortDescription = styled.p`
  font-size: 12px;
  color: #FFFFFF;
  font-weight: 300;
  line-height: 16px;
  margin-top: 10px;
`
