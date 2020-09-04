import React from 'react'
import { ContainerNotFound, Title404, Text404 } from './styles'
import { LinkButton } from '../Generals/LinkButton'

export const NotFound = () => {
  return (
    <ContainerNotFound>
      <Title404>404</Title404>
      <Text404>No hemos encontrado lo que buscas ;c</Text404>
      <LinkButton url='/'>Volver al inicio</LinkButton>
    </ContainerNotFound>
  )
}
