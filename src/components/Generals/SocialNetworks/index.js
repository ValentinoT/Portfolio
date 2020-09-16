import React from 'react'
import { ContainerSocialNetworks, SocialNetwork } from './styles'
import { Linkedin } from '../../../icons/Linkedin'
import { Github } from '../../../icons/Github'
import { Instagram } from '../../../icons/Instagram'

export const SocialNetworks = () => {
  return (
    <ContainerSocialNetworks className='social-networks'>
      <SocialNetwork href='https://www.linkedin.com/in/valentinotorresdev' target='_blank'>
        <Linkedin />
      </SocialNetwork>
      <SocialNetwork href='https://github.com/ValentinoTorresDev' target='_blank'>
        <Github />
      </SocialNetwork>
      <SocialNetwork href='https://www.instagram.com/valentinotorresdev/' target='_blank'>
        <Instagram />
      </SocialNetwork>
    </ContainerSocialNetworks>
  )
}
