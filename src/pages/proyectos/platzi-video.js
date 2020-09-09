import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, ReactIcon, Redux } from '../../icons'
import { SEO } from '../../components/SEO'

export default function platziVideo () {
  return (
    <>
      <SEO title='Platzi Video' />
      <Single
        title='Platzi Video'
        icons={[<Javascript />, <ReactIcon />, <Redux />]}
        urlProject='https://mega.nz/file/WOIykSgB#yCQ44PKRK3Pk3Ta4FP5BBwOnEsnFPYV82avt9D3ywb8'
        urlRepository='https://github.com/ValentinoTorresDev/platzi-video'
      >
        <TextSingle>
          Platzi Video es una app para ver la información y los trailers de tus películas favoritas. Está
          desarrollada con react native. React native permite crear aplicaciones nativas con nuestros
          conocimientos previos de react.
        </TextSingle>
        <TextSingle>
          En este proyecto se utiliza la API de <a href='https://yts.mx/' target='_blank'>YTS</a>. Esta
          aplicación esta desarrollada con:
        </TextSingle>
        <ContainerList>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Redux para el manejo del estado global</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>React Navigation para la gestión de rutas</TextSingle>
          </ContainerListItem>
        </ContainerList>
        <TextSingle>
          Puedes descargar la app <b><a href='https://mega.nz/file/WOIykSgB#yCQ44PKRK3Pk3Ta4FP5BBwOnEsnFPYV82avt9D3ywb8' target='_blank'>aquí</a></b>
        </TextSingle>
      </Single>
    </>
  )
}
