import React, { useEffect } from 'react'
import { ContainerMenuVertical, ContainerMenu, StyledLink, ContainerIcon, TextMenu, Line } from './styles'
import { ProjectsInactive } from '../../icons/ProjectsInactive'
import { ProjectsActive } from '../../icons/ProjectsActive'
import { AboutMyInactive } from '../../icons/AboutMyInactive'
import { AboutMyActive } from '../../icons/AboutMyActive'
import { BlogInactive } from '../../icons/BlogInactive'
import { BlogActive } from '../../icons/BlogActive'
import { ContactInactive } from '../../icons/ContactInactive'
import { ContactActive } from '../../icons/ContactActive'
import { useMatch } from '@reach/router'

export const Navbar = () => {
  const matchProjects = useMatch('/')
  const matchAbout = useMatch('/sobre-mi')
  const matchBlog = useMatch('/blog')
  const matchContact = useMatch('/contacto')
  const matchSingleBlog = useMatch('blog/:name')

  useEffect(() => {
    const projects = document.querySelector('#projects')
    const sobreMi = document.querySelector('#sobreMi')
    const blog = document.querySelector('#blog')
    const contacto = document.querySelector('#contacto')

    if (matchProjects) {
      projects.classList.add('active')
    } else {
      projects.classList.remove('active')
    }

    if (matchAbout) {
      sobreMi.classList.add('active')
    } else {
      sobreMi.classList.remove('active')
    }

    if (matchBlog || matchSingleBlog) {
      blog.classList.add('active')
    } else {
      blog.classList.remove('active')
    }

    if (matchContact) {
      contacto.classList.add('active')
    } else {
      contacto.classList.remove('active')
    }
  }, [matchProjects, matchAbout, matchBlog, matchContact])

  return (
    <ContainerMenuVertical blog={matchBlog} singleBlog={matchSingleBlog}>
      <ContainerMenu>
        <StyledLink to='/contacto' activeClassName='active' id='contacto'>
          <ContainerIcon>
            <ContactInactive className='inactive-icon' />
            <ContactActive className='active-icon' />
          </ContainerIcon>
          <TextMenu>Contacto</TextMenu>
          <Line />
        </StyledLink>
        <StyledLink to='/blog' activeClassName='active' id='blog'>
          <ContainerIcon>
            <BlogInactive className='inactive-icon' />
            <BlogActive className='active-icon' />
          </ContainerIcon>
          <TextMenu>Blog</TextMenu>
          <Line />
        </StyledLink>
        <StyledLink to='/sobre-mi' activeClassName='active' id='sobreMi'>
          <ContainerIcon>
            <AboutMyInactive className='inactive-icon' />
            <AboutMyActive className='active-icon' />
          </ContainerIcon>
          <TextMenu>Sobre Mí</TextMenu>
          <Line />
        </StyledLink>
        <StyledLink to='/' activeClassName='active' id='projects'>
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
