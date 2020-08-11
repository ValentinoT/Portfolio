import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Keyboard } from 'swiper'
import SwiperStyles from './RequiredStyles.css'
import { CarrouselProjectsContainer } from './styles'
import { CardProject } from '../CardProject'
import { HTML5 } from '../../icons/HTML5'
import { CSS3 } from '../../icons/CSS3'
import { Javascript } from '../../icons/Javascript'
import { ReactIcon } from '../../icons/ReactIcon'
import { Gatsby } from '../../icons/Gatsby'
import { useWidth } from '../../hooks/useWidth'
import { ListProjects } from '../ListProjects'

SwiperCore.use([Autoplay, Keyboard])

export default function CarrouselProjects () {
  const [width] = useWidth()
  return (
    <>
      {
        width > 768
          ? <CarrouselProjectsContainer
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
                url='/'
                icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
                imgDesktop='ProjectDesktop.jpg'
                imgTablet='ProjectTablet.jpg'
                imgMobile='ProjectMobile.jpg'
                title='Título del Proyecto 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardProject
                url='/'
                icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
                imgDesktop='ProjectDesktop2.jpg'
                imgTablet='ProjectTablet2.jpg'
                imgMobile='ProjectMobile2.jpg'
                title='Título del Proyecto 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardProject
                url='/'
                icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
                imgDesktop='ProjectDesktop3.jpg'
                imgTablet='ProjectTablet3.jpg'
                imgMobile='ProjectMobile3.jpg'
                title='Título del Proyecto 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardProject
                url='/'
                icons={[<HTML5 />, <CSS3 />, <Javascript />, <ReactIcon />, <Gatsby />]}
                imgDesktop='ProjectDesktop4.jpg'
                imgTablet='ProjectTablet4.jpg'
                imgMobile='ProjectMobile4.jpg'
                title='Título del Proyecto 1'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
              />
            </SwiperSlide>
          </CarrouselProjectsContainer>
          : <ListProjects />
      }

    </>
  )
}
