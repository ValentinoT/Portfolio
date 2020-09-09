import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, ReactIcon, GrapQL, StyledComponents } from '../../icons'
import { SEO } from '../../components/SEO'

export default function petgram () {
  return (
    <>
      <SEO title='Petgram' />
      <Single
        title='Petgram'
        icons={[<Javascript />, <ReactIcon />, <GrapQL />, <StyledComponents />]}
        urlProject='https://petgram.valentinot.now.sh/'
        urlRepository='https://github.com/ValentinoTorresDev/Petgram'
      >
        <TextSingle>
          Petgram es un clon de instagram, centrado en las mascotas. Desarrollada con React, una
          biblioteca que nos permite la construcción de aplicaciones basándonos en componentes.
        </TextSingle>
        <TextSingle>
          Esta aplicación utiliza:
        </TextSingle>
        <ContainerList>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Eslint como linter</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Styled components para la creación de los estilos</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>GraphQL y apollo para todo el manejo de datos y estado</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Reach router para el manejo de rutas</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>React Helmet para gestionar SEO de cada una de nuestras páginas</TextSingle>
          </ContainerListItem>
        </ContainerList>
      </Single>
    </>
  )
}
