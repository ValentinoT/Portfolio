import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const CarrouselProjects = styled(Swiper)`
  && .swiper-slide{
    transition: all 0.15s linear;
    transform-origin: left center;
  }
  &&:hover .swiper-slide:hover {
    transform: scale(1.2);
  }
  && .swiper-slide:hover ~ .swiper-slide {
    transform: translate3d(60px, 0, 0);
  }
`

export const CardProjectContainer = styled.article`
  background-color: ${({ theme }) => theme.colors.backgroundCardProject};
  width: 300px;
  height: 80%;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 40px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
`
