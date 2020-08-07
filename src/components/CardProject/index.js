import React from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Keyboard } from 'swiper'
import SwiperStyles from './RequiredStyles.css'
import { CarrouselProjects, CardProjectContainer } from './styles'

SwiperCore.use([Autoplay, Keyboard])

export const CardProject = () => {
  return (
    <CarrouselProjects
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
        <CardProjectContainer>
          1
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          2
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          3
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          4
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          5
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          6
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          7
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          8
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          9
        </CardProjectContainer>
      </SwiperSlide>
      <SwiperSlide>
        <CardProjectContainer>
          10
        </CardProjectContainer>
      </SwiperSlide>
    </CarrouselProjects>
  )
}
