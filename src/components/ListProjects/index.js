import React from 'react'
import { ContainerListProjects } from './styles'
import { CardProject } from '../CardProject'
import { HTML5 } from '../../icons/HTML5'
import { CSS3 } from '../../icons/CSS3'
import { Javascript } from '../../icons/Javascript'
import { ReactIcon } from '../../icons/ReactIcon'
import { Gatsby } from '../../icons/Gatsby'

export const ListProjects = () => {
  return (
    <ContainerListProjects>
      <CardProject
        url='/'
        icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
        imgDesktop='ProjectDesktop.jpg'
        imgTablet='ProjectTablet.jpg'
        imgMobile='ProjectMobile.jpg'
        title='Título del Proyecto 1'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
      />
      <CardProject
        url='/'
        icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
        imgDesktop='ProjectDesktop2.jpg'
        imgTablet='ProjectTablet2.jpg'
        imgMobile='ProjectMobile2.jpg'
        title='Título del Proyecto 1'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
      />
      <CardProject
        url='/'
        icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
        imgDesktop='ProjectDesktop3.jpg'
        imgTablet='ProjectTablet3.jpg'
        imgMobile='ProjectMobile3.jpg'
        title='Título del Proyecto 1'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
      />
      <CardProject
        url='/'
        icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
        imgDesktop='ProjectDesktop4.jpg'
        imgTablet='ProjectTablet4.jpg'
        imgMobile='ProjectMobile4.jpg'
        title='Título del Proyecto 1'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
      />
    </ContainerListProjects>
  )
}
