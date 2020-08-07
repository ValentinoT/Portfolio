import React from 'react'
import { CardProjectContainer, HeaderProject, ContainerHeaderTextBox, HeaderTitle, ContainerHeaderIcons, ContainerImageDesktop, ContainerImageTablet, ContainerImageMobile, FooterProject, TitleProject, ShortDescription } from './styles'
import { Image } from '../Image'
import { HTML5 } from '../../icons/HTML5'
import { CSS3 } from '../../icons/CSS3'
import { Javascript } from '../../icons/Javascript'

export const CardProject = (
  {
    url = '/',
    icons = [<HTML5 />, <CSS3 />, <Javascript />],
    imgDesktop = 'ProjectDesktop.jpg',
    imgTablet = 'ProjectTablet.jpg',
    imgMobile = 'ProjectMobile.jpg',
    title = 'Título del Proyecto',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula velit. Insollicitudin condimentum quam...'
  }
) => {
  return (
    <CardProjectContainer to={url}>
      <HeaderProject className='headerProject'>
        <ContainerHeaderTextBox>
          <HeaderTitle>Tecnologías</HeaderTitle>
          <ContainerHeaderIcons>
            {icons.map((icon, id) =>
              <div key={id}>
                {icon}
              </div>
            )}
          </ContainerHeaderIcons>
        </ContainerHeaderTextBox>
      </HeaderProject>
      <ContainerImageDesktop>
        <Image name={imgDesktop} />
      </ContainerImageDesktop>
      <ContainerImageTablet>
        <Image name={imgTablet} />
      </ContainerImageTablet>
      <ContainerImageMobile>
        <Image name={imgMobile} />
      </ContainerImageMobile>
      <FooterProject className='footerProject'>
        <TitleProject>{title}</TitleProject>
        <ShortDescription>
          {description}
        </ShortDescription>
      </FooterProject>
    </CardProjectContainer>
  )
}
