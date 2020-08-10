import styled from 'styled-components'
import { Swiper } from 'swiper/react'

export const CarrouselProjectsContainer = styled(Swiper)`
  max-height: calc(100vh - 211px);
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
  && .swiper-wrapper{
    margin-left: 20px;
  }
  @media (max-width: 1723px) {
    max-height: calc(100vh - 225px);
  }
  @media (max-width: 1024px) {
    max-height: calc(100vh - 236px);
  }
  @media (max-width: 963px) {
    max-height: calc(100vh - 256px);
  }
`
