import React from 'react'
import { ContainerAbout, ContainerText, ContainerImage, TitleAbout, TextAbout } from './styles'
import { Image } from '../Image'

export const About = () => {
  return (
    <ContainerAbout>
      <ContainerText>
        <TitleAbout size='20px' weight='400'>¿Quién Soy?</TitleAbout>
        <TextAbout lh='24px' pt='20px' pb='20px'>
          Soy un frontend developer. Venezolano, pero actualmente viviendo en Colombia. Puedes
          encontrarme en las principales redes sociales como @ValentinoTorresDev.
        </TextAbout>
        <TitleAbout size='20px' weight='400'>Intereses</TitleAbout>
        <TextAbout lh='24px' pt='20px' pb='20px'>
          Soy un apasionado de la tecnología, me enfoco principalmente en el desarrollo de aplicaciones
          web, desarrollo de aplicaciones móviles. Actualmente estoy enfocado principalmente en
          javascript, y el desarrollo de aplicaciones con React JS.
        </TextAbout>
        <TitleAbout size='20px' weight='400'>Objetivos y Tecnologías</TitleAbout>
        <TextAbout lh='24px' pt='20px' pb='20px'>
          Actualmente me encuentro en busca de nuevos retos profesionales, me gustaría adquirir
          experiencia en proyectos a gran escala y posibilidades de mucho crecimiento, preferiblemente
          en una startup. Algunas de las tecnologías que domino son: HTML5, CSS3, Javascript, React Js ,
          React Native, Next Js, Gatsby Js, Redux.
        </TextAbout>
      </ContainerText>
      <ContainerImage>
        <Image name='ImageAbout.jpg' />
      </ContainerImage>
    </ContainerAbout>
  )
}
