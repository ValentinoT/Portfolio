import React from 'react'
import { ContainerFooter, ContainerFooterLeft, AllRightsReserved } from './styles'
import { SocialNetworks } from '../Generals/SocialNetworks'
import { LinkButton } from '../Generals/LinkButton'
import { Text } from '../styles/Generals'
import { Heart } from '../../icons/Heart'
import { ButtonContact } from '../../icons/ButtonContact'
import { useMatch } from '@reach/router'

export const Footer = () => {
  const singleProject = useMatch('/proyectos/:name')
  const about = useMatch('/sobre-mi')
  const contact = useMatch('/contacto')
  const blog = useMatch('/blog')
  const singleBlog = useMatch('/blog/:name')

  return (
    <ContainerFooter singleProject={singleProject} about={about} contact={contact} blog={blog} singleBlog={singleBlog}>
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
