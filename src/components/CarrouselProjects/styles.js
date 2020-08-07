import styled from 'styled-components'
import { Swiper } from 'swiper/react'
import { device } from '../styles/Generals'

export const CarrouselProjectsContainer = styled(Swiper)`
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
  @media ${device.desktop}{
    max-height: calc(100vh - 211px);
  }
  @media ${device.laptopL}{
    max-height: calc(100vh - 225px);
  }
  @media ${device.laptop}{
    max-height: calc(100vh - 236px);
  }
`
