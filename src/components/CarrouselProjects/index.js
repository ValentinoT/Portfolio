import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Keyboard } from 'swiper'
import SwiperStyles from './RequiredStyles.css'
import { CarrouselProjectsContainer } from './styles'
import { CardProject } from '../CardProject'
import { Javascript, ReactIcon, Gatsby, MaterialUI, GrapQL, StyledComponents, Stripe, Redux, Next, PHP, Wordpress, Elementor } from '../../icons'

SwiperCore.use([Autoplay, Keyboard])

export const CarrouselProjects = () => {
  return (
    <CarrouselProjectsContainer
      className={SwiperStyles}
      slidesPerView='auto'
      autoplay={{
        delay: 5000,
        disableOnInteraction: true
      }}
      keyboard={{
        enabled: true
      }}
      loop
    >
      <SwiperSlide>
        <CardProject
          url='/proyectos/lovicon'
          icons={[<Javascript />, <ReactIcon />, <Gatsby />, <MaterialUI />]}
          imgDesktop='Lovicon-desktop.jpg'
          imgTablet='Lovicon-tablet.png'
          imgMobile='Lovicon-mobile.png'
          title='Lovicon'
          description='Lovicon es una empresa que se dedica a la creación de tiendas físicas, con el fin de brindar una gran experiencia...'
        />
      </SwiperSlide>
      <SwiperSlide>
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
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          url='/proyectos/platzi-swag'
          icons={[<Javascript />, <ReactIcon />, <GrapQL />, <Stripe />]}
          imgDesktop='PlatziSwag-desktop.png'
          imgTablet='PlatziSwag-tablet.png'
          imgMobile='PlatziSwag-mobile.png'
          title='Platzi Swag'
          description='Platzi swag en una tienda construida con Gatsby JS. Gatsby es un generador de sitios estáticos, con lo cual obtenemos seguridad y velocidad en nuestros proyectos...'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          url='/proyectos/platzi-video'
          icons={[<Javascript />, <ReactIcon />, <Redux />]}
          imgDesktop='Platzi-video.jpg'
          imgTablet='Platzi-video.jpg'
          imgMobile='Platzi-video.jpg'
          title='Platzi Video'
          description='Platzi Video es una app para ver la información y los trailers de tus películas favoritas. Está desarrollada con react native...'
          singleApp
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          url='/proyectos/podcast-app'
          icons={[<Javascript />, <ReactIcon />, <Next />]}
          imgDesktop='PodcastApp-desktop.png'
          imgTablet='PodcastApp-tablet.png'
          imgMobile='PodcastApp-mobile.png'
          title='Podcast App'
          description='Esta App de podcast está construida con Next JS. Next permite que nuestras aplicaciones tengan SSR (Server Side Render). El servidor genera la vista del sitio que solicitemos...'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          url='/proyectos/blog-platzi'
          icons={[<Javascript />, <ReactIcon />, <Redux />]}
          imgDesktop='BlogPlatzi-desktop.png'
          imgTablet='BlogPlatzi-tablet.png'
          imgMobile='BlogPlatzi-mobile.png'
          title='Platzi Blog'
          description='Proyecto del curso de redux en platzi. Gestionamos todo el flujo de datos de nuestro blog con redux, además de aplicar...'
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardProject
          url='/proyectos/global'
          icons={[<Javascript />, <PHP />, <Wordpress />, <Elementor />]}
          imgDesktop='Global-desktop.jpg'
          imgTablet='Global-tablet.png'
          imgMobile='Global-mobile.png'
          title='Global'
          description='Global es una compañía de asesoramiento de inversiones. Necesitaban un sitio altamente administrable para manejar todas su...'
        />
      </SwiperSlide>
    </CarrouselProjectsContainer>
  )
}
