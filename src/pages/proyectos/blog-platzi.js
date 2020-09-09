import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, ReactIcon, Redux } from '../../icons'
import { SEO } from '../../components/SEO'

export default function blogPlatzi () {
  return (
    <>
      <SEO title='Blog Platzi' />
      <Single
        title='Blog Platzi'
        icons={[<Javascript />, <ReactIcon />, <Redux />]}
        urlProject='https://blog-platzi.valentinot.vercel.app/'
        urlRepository='https://github.com/ValentinoTorresDev/Blog-Platzi'
      >
        <TextSingle>
          Proyecto del curso de redux en platzi. Gestionamos todo el flujo de datos de nuestro blog con
          redux, además de aplicar conceptos básicos de react.
        </TextSingle>
        <TextSingle>
          Toda la data de esta aplicación es tomada de la API <a href='https://jsonplaceholder.typicode.com/' target='_blank'>JSON Placeholder</a>.
        </TextSingle>
      </Single>
    </>
  )
}
