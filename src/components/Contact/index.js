import React from 'react'
import { ContainerContact, ContainerForm, ContainerInformation, ContainerPhone, ContainerEmail, LinkInfo } from './styles'
import { ContactForm } from '../ContactForm'
import { SubTitle, Text } from '../styles/Generals'
import { SocialNetworks } from '../Generals/SocialNetworks'

export const Contact = () => {
  return (
    <ContainerContact>
      <SubTitle size='26px' weight='600'>Hablemos !</SubTitle>
      <ContainerForm>
        <ContactForm />
      </ContainerForm>
      <ContainerInformation>
        <ContainerPhone>
          <SubTitle size='20px' weight='500'>Teléfono:</SubTitle>
          <LinkInfo href='tel:573222826936'>
            <Text size='18px'>+57 322 2826936</Text>
          </LinkInfo>
        </ContainerPhone>
        <ContainerEmail>
          <SubTitle size='20px' weight='500'>Email:</SubTitle>
          <LinkInfo href='mailto:info@valentinotorres.com'>
            <Text size='18px'>info@valentinotorres.com</Text>
          </LinkInfo>
        </ContainerEmail>
        <SocialNetworks />
      </ContainerInformation>
    </ContainerContact>
  )
}
