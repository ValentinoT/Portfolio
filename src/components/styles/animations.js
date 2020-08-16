import { keyframes, css } from 'styled-components'

const fadeInKeyFrame = keyframes`
  from{
    filter: blur(4px);
    opacity: 0;
  }
  to{
    filter: blur(0px);
    opacity: 1;
  }
`

const zoomKeyFrame = keyframes`
  from{
    transform: scale(.4);
  }
  to{
    transform: scale(1);
  }
`

export const fadeIn = ({ time = '.3s', type = 'ease' } = {}) => css`animation: ${time} ${fadeInKeyFrame} ${type};`
export const zoom = ({ time = '.3s', type = 'ease' } = {}) => css`animation: ${time} ${zoomKeyFrame} ${type}`
