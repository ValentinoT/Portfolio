import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, ReactIcon, Next } from '../../icons'
import { SEO } from '../../components/SEO'

export default function podcastApp () {
  return (
    <>
      <SEO title='Podcast App' />
      <Single
        title='Podcast App'
        icons={[<Javascript />, <ReactIcon />, <Next />]}
        urlProject='https://podcast-app.valentinot.vercel.app/'
        urlRepository='https://github.com/ValentinoTorresDev/podcast-app'
      >
        <TextSingle>
          Esta App de podcast está construida con Next JS. Next permite que nuestras aplicaciones tengan
          SSR (Server Side Render). El servidor genera la vista del sitio que solicitemos y una vez el
          cliente la recibe, esta funciona como una SPA (Single Page Aplication).
        </TextSingle>
        <TextSingle>
          Toda la data de esta aplicación es tomada de la API de Audioboom y utiliza:
        </TextSingle>
        <ContainerList>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>React para la creación de los componentes.</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Styled JSX para la creación de los estilos.</TextSingle>
          </ContainerListItem>
        </ContainerList>
      </Single>
    </>
  )
}
