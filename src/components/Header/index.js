import React from 'react'
import { MyHeader, ContainerImage, ContainerText, ContainerTextTablet, ContainerTextMovile, ButtonToggleTheme } from './styles'
import { Sun } from '../../icons/Sun'
import { Image } from '../Image'
import { SubTitle, Title, Text } from '../styles/Generals'
import { useLocation, useMatch } from '@reach/router'

export const Header = ({ toggleTheme, themeMode }) => {
  const { pathname } = useLocation()
  const singleProject = useMatch('/proyectos/:name')
  const about = useMatch('/sobre-mi')
  const contact = useMatch('/contacto')
  const blog = useMatch('/blog')
  const singleBlog = useMatch('/blog/:name')

  return (
    <MyHeader blog={blog} singleBlog={singleBlog} singleProject={singleProject}>
      <ContainerImage className='containerImage'>
        <Image name='valentino.png' />
      </ContainerImage>
      <ContainerText about={about} contact={contact} blog={blog} singleBlog={singleBlog} singleProject={singleProject}>
        <SubTitle>Hola soy,</SubTitle>
        <Title>Valentino Torres</Title>
        {pathname === '/'
          ? <Text pt='10px'>
            Soy un frontend developer. Venezolano, pero actualmente viviendo en Colombia. Puedes
            encontrarme en las principales redes sociales como @ValentinoTorresDev. Me dedico al desarrollo
            de aplicaciones web y móviles.
            </Text>
          : ''}
      </ContainerText>
      <ContainerTextTablet>
        {pathname === '/'
          ? <Text pt='10px'>
            Soy un frontend developer. Venezolano, pero actualmente viviendo en Colombia. Puedes
            encontrarme en las principales redes sociales como @ValentinoTorresDev. Me dedico al desarrollo
            de aplicaciones web y móviles.
            </Text>
          : ''}
      </ContainerTextTablet>
      <ContainerTextMovile>
        {pathname === '/'
          ? <Text pt='10px'>
            Soy un frontend developer. Me dedico al desarrollo de aplicaciones web y móviles.
            </Text>
          : ''}
      </ContainerTextMovile>
      <ButtonToggleTheme onClick={toggleTheme} themeMode={themeMode}>
        <Sun />
      </ButtonToggleTheme>
    </MyHeader>
  )
}
