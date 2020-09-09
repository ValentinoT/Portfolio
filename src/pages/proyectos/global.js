import React from 'react'
import { Single } from '../../components/Single'
import { TextSingle, ContainerList, ContainerListItem, PointListItem } from '../../components/Single/styles'
import { Javascript, PHP, Wordpress, Elementor } from '../../icons'
import { SEO } from '../../components/SEO'

export default function global () {
  return (
    <>
      <SEO title='Global Securities Colombia' />
      <Single
        title='Global Securities Colombia'
        icons={[<Javascript />, <PHP />, <Wordpress />, <Elementor />]}
        urlProject='https://www.globalcdb.com/'
        oneButton
      >
        <TextSingle>
          Global es una compañía de asesoramiento de inversiones. Necesitaban un sitio altamente
          administrable para manejar todas su información. Por ello se encuentra construido con wordpress.
        </TextSingle>
        <TextSingle>
          Esta sitio web utiliza:
        </TextSingle>
        <ContainerList>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Wordpress como CMS</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Elementor para la construcción, sencilla y veloz de cada página</TextSingle>
          </ContainerListItem>
          <ContainerListItem>
            <PointListItem />
            <TextSingle>Un poco de PHP y JS para consumir algunos datos desde su API</TextSingle>
          </ContainerListItem>
        </ContainerList>
      </Single>
    </>
  )
}
