import React from 'react'
import { ContainerSocialNetworks, SocialNetwork } from './styles'
import { Linkedin } from '../../../icons/Linkedin'
import { Github } from '../../../icons/Github'
import { Instagram } from '../../../icons/Instagram'

export const SocialNetworks = () => {
  return (
    <ContainerSocialNetworks>
      <SocialNetwork href='https://www.linkedin.com/' target='_blank'>
        <Linkedin />
      </SocialNetwork>
      <SocialNetwork href='https://github.com/' target='_blank'>
        <Github />
      </SocialNetwork>
      <SocialNetwork href='https://www.instagram.com' target='_blank'>
        <Instagram />
      </SocialNetwork>
    </ContainerSocialNetworks>
  )
}
