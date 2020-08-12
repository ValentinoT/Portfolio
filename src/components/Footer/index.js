import React from 'react'
import { ContainerFooter, ContainerFooterLeft, AllRightsReserved } from './styles'
import { SocialNetworks } from '../Generals/SocialNetworks'
import { Button } from '../Generals/Button'
import { Text } from '../styles/Generals'
import { Heart } from '../../icons/Heart'
import { ButtonContact } from '../../icons/ButtonContact'
import { useMatch } from '@reach/router'

export const Footer = () => {
  const about = useMatch('sobre-mi')

  return (
    <ContainerFooter about={about}>
      <ContainerFooterLeft>
        <SocialNetworks />
        <AllRightsReserved>
          <Text size='12px'>Hecho con</Text>
          <Heart />
          <Text size='12px'>en Colombia | Todos los derechos reservados</Text>
        </AllRightsReserved>
      </ContainerFooterLeft>
      <Button icon={<ButtonContact />}>
        Contacto
      </Button>
    </ContainerFooter>
  )
}
