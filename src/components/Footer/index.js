import React from 'react'
import { ContainerFooter, ContainerFooterLeft, AllRightsReserved } from './styles'
import { SocialNetworks } from '../Generals/SocialNetworks'
import { LinkButton } from '../Generals/LinkButton'
import { Text } from '../styles/Generals'
import { Heart } from '../../icons/Heart'
import { ButtonContact } from '../../icons/ButtonContact'
import { useMatch } from '@reach/router'

export const Footer = () => {
  const about = useMatch('sobre-mi')
  const blog = useMatch('blog')
  const contact = useMatch('contacto')

  return (
    <ContainerFooter about={about} contact={contact} blog={blog}>
      <ContainerFooterLeft className='container-footer-left'>
        <SocialNetworks />
        <AllRightsReserved className='all-rights-reserved'>
          <Text size='12px'>Hecho con</Text>
          <Heart />
          <Text size='12px'>en Colombia | Todos los derechos reservados</Text>
        </AllRightsReserved>
      </ContainerFooterLeft>
      <LinkButton url='/contacto' icon={<ButtonContact />} className='button-contact'>
        Contacto
      </LinkButton>
    </ContainerFooter>
  )
}
