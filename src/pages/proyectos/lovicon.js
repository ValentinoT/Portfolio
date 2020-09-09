import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, ReactIcon, Gatsby, MaterialUI } from '../../icons'
import { SEO } from '../../components/SEO'

export default function lovicon () {
  return (
    <>
      <SEO title='Lovicon' />
      <Single
        title='Lovicon'
        icons={[<Javascript />, <ReactIcon />, <Gatsby />, <MaterialUI />]}
        urlProject='https://loviconretail.co/'
        oneButton
      >
        <TextSingle>
          Lovicon es una empresa que se dedica a la creación de tiendas físicas, con el fin de brindar
          una gran experiencia a cada cliente. Debíamos promover estas sensaciones de sus tiendas físicas
          a su web, por lo tanto se buscó un diseño simple pero atractivo, con un gran rendimiento.
        </TextSingle>
        <TextSingle>
          Esta aplicación está construida con:
        </TextSingle>
        <ContainerList>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Gatsby JS, para tener un gran rendimiento</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Material UI para la utilización de componentes</TextSingle>
          </ContainerListItem>
        </ContainerList>
      </Single>
    </>
  )
}
