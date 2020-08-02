import React from 'react'
import { MyHeader, ContainerImage, ContainerText, ButtonToggleTheme } from './styles'
import { Sun } from '../../icons/Sun'
import { Image } from '../Image'
import { SubTitle, Title, Text } from '../styles/Generals'

export const Header = ({ toggleTheme, themeMode }) => {
  return (
    <MyHeader>
      <ContainerImage>
        <Image name='valentino.png' />
      </ContainerImage>
      <ContainerText>
        <SubTitle>Hola soy,</SubTitle>
        <Title>Valentino Torres</Title>
        <Text pt='10px'>
          Soy un frontend developer. Venezolano, pero actualmente viviendo en Colombia. Puedes
          encontrarme en las principales redes sociales como @ValentinoTorresDev. Me dedico al desarrollo
          de aplicaciones web y móviles.
        </Text>
      </ContainerText>
      <ButtonToggleTheme onClick={toggleTheme} themeMode={themeMode}>
        <Sun />
      </ButtonToggleTheme>
    </MyHeader>
  )
}
