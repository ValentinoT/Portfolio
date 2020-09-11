import React from 'react'
import { ContainerListProjects } from './styles'
import { CardProject } from '../CardProject'
import { Javascript, ReactIcon, Gatsby, MaterialUI, GrapQL, StyledComponents, Stripe, Redux, Next, PHP, Wordpress, Elementor } from '../../icons'

export const ListProjects = () => {
  return (
    <ContainerListProjects>
      <CardProject
        url='/proyectos/lovicon'
        icons={[<Javascript />, <ReactIcon />, <Gatsby />, <MaterialUI />]}
        imgDesktop='Lovicon-desktop.jpg'
        imgTablet='Lovicon-tablet.jpg'
        imgMobile='Lovicon-mobile.jpg'
        title='Lovicon'
        description='Lovicon es una empresa que se dedica a la creación de tiendas físicas, con el fin de brindar una gran experiencia...'
      />
      <CardProject
        url='/proyectos/petgram'
        icons={[<Javascript />, <ReactIcon />, <GrapQL />, <StyledComponents />]}
        imgDesktop='Petgram-mobile.jpg'
        imgTablet='Petgram-mobile.jpg'
        imgMobile='Petgram-mobile.jpg'
        title='Petgram'
        description='Petgram es un clon de instagram, centrado en las mascotas. Desarrollada con React, una biblioteca que nos permite...'
        singleApp
      />
      <CardProject
        url='/proyectos/platzi-swag'
        icons={[<Javascript />, <ReactIcon />, <GrapQL />, <Stripe />]}
        imgDesktop='PlatziSwag-desktop.jpg'
        imgTablet='PlatziSwag-tablet.jpg'
        imgMobile='PlatziSwag-mobile.jpg'
        title='Platzi Swag'
        description='Platzi swag en una tienda construida con Gatsby JS. Gatsby es un generador de sitios estáticos, con lo cual obtenemos seguridad y velocidad en nuestros proyectos...'
      />
      <CardProject
        url='/proyectos/platzi-video'
        icons={[<Javascript />, <ReactIcon />, <Redux />]}
        imgDesktop='PlatziVideo.jpg'
        imgTablet='PlatziVideo.jpg'
        imgMobile='PlatziVideo.jpg'
        title='Platzi Video'
        description='Platzi Video es una app para ver la información y los trailers de tus películas favoritas. Está desarrollada con react native...'
        singleApp
      />
      <CardProject
        url='/proyectos/podcast-app'
        icons={[<Javascript />, <ReactIcon />, <Next />]}
        imgDesktop='PodcastApp-desktop.jpg'
        imgTablet='PodcastApp-tablet.jpg'
        imgMobile='PodcastApp-mobile.jpg'
        title='Podcast App'
        description='Esta App de podcast está construida con Next JS. Next permite que nuestras aplicaciones tengan SSR (Server Side Render). El servidor genera la vista del sitio que solicitemos...'
      />
      <CardProject
        url='/proyectos/blog-platzi'
        icons={[<Javascript />, <ReactIcon />, <Redux />]}
        imgDesktop='BlogPlatzi-desktop.jpg'
        imgTablet='BlogPlatzi-tablet.jpg'
        imgMobile='BlogPlatzi-mobile.jpg'
        title='Platzi Blog'
        description='Proyecto del curso de redux en platzi. Gestionamos todo el flujo de datos de nuestro blog con redux, además de aplicar...'
      />
      <CardProject
        url='/proyectos/global'
        icons={[<Javascript />, <PHP />, <Wordpress />, <Elementor />]}
        imgDesktop='Global-desktop.jpg'
        imgTablet='Global-tablet.jpg'
        imgMobile='Global-mobile.jpg'
        title='Global'
        description='Global es una compañía de asesoramiento de inversiones. Necesitaban un sitio altamente administrable para manejar todas su...'
      />
    </ContainerListProjects>
  )
}
