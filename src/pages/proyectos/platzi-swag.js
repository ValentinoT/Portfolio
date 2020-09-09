import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, ReactIcon, Gatsby, GrapQL, Stripe } from '../../icons'
import { SEO } from '../../components/SEO'

export default function platziSwag () {
  return (
    <>
      <SEO title='Platzi Swag' />
      <Single
        title='Platzi Swag'
        icons={[<Javascript />, <ReactIcon />, <Gatsby />, <GrapQL />, <Stripe />]}
        urlProject='https://platziswag-valentino.netlify.app/'
        urlRepository='https://github.com/ValentinoTorresDev/platzi-swag'
      >
        <TextSingle>
          Platzi swag en una tienda construida con Gatsby JS. Gatsby es un generador de sitios estáticos,
          con lo cual obtenemos seguridad y velocidad en nuestros proyectos, además, cuenta con un
          ecosistema de plugins y templates, para una construcción ágil.
        </TextSingle>
        <TextSingle>
          El sitio está generado sobre gatsby-starter-default y utiliza:
        </TextSingle>
        <ContainerList>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Eslint como linter</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>GrahpQL para consumir todos los datos</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>React para la creación de los componentes</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Stripe Checkout como pasarela de pago</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Styled components para la creación de los estilos</TextSingle>
          </ContainerListItem>
        </ContainerList>
        <TextSingle>
          El manejo del estado global de la app esta hecho con react context y las páginas de cada
          producto se generan de manera programática con base en los datos. Se encuentra desplegado en
          netlify.
        </TextSingle>
      </Single>
    </>
  )
}
