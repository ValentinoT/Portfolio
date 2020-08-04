import React from 'react'
import { ContainerMenuVertical, ContainerMenu, StyledLink, ContainerIcon, TextMenu, Line } from './styles'
import { ProjectsInactive } from '../../icons/ProjectsInactive'
import { ProjectsActive } from '../../icons/ProjectsActive'
import { AboutMyInactive } from '../../icons/AboutMyInactive'
import { AboutMyActive } from '../../icons/AboutMyActive'
import { BlogInactive } from '../../icons/BlogInactive'
import { BlogActive } from '../../icons/BlogActive'

export const Navbar = () => {
  return (
    <ContainerMenuVertical>
      <ContainerMenu>
        <StyledLink to='/blog' activeClassName='active'>
          <ContainerIcon>
            <BlogInactive className='inactive-icon' />
            <BlogActive className='active-icon' />
          </ContainerIcon>
          <TextMenu>Blog</TextMenu>
          <Line />
        </StyledLink>
        <StyledLink to='/sobre-mi' activeClassName='active'>
          <ContainerIcon>
            <AboutMyInactive className='inactive-icon' />
            <AboutMyActive className='active-icon' />
          </ContainerIcon>
          <TextMenu>Sobre Mí</TextMenu>
          <Line />
        </StyledLink>
        <StyledLink to='/' activeClassName='active'>
          <ContainerIcon>
            <ProjectsInactive className='inactive-icon' />
            <ProjectsActive className='active-icon' />
          </ContainerIcon>
          <TextMenu>Proyectos</TextMenu>
          <Line />
        </StyledLink>
      </ContainerMenu>
    </ContainerMenuVertical>
  )
}
