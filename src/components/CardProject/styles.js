import styled from 'styled-components'

export const CarrouselProjects = styled.section`
  white-space: nowrap;
  height: 100%;
  display: flex;
  align-items: center;
  &&:hover article:hover {
      transform: scale(1.2);
    }
  && article:hover ~ article {
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
  transition: all 0.15s linear;
  transform-origin: left center;
`
