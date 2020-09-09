import React from 'react'
import { ContainerSingle, PostWidth, ContainerImagePost, TitleSingle, SubTitleSingle, ContainerTechnologies, ContainerIcons, ContainerButtons, Anchor } from './styles'
import { Image } from '../Image'
import { Button } from '../Generals/Button'

export const Single = ({ children, img = null, title = 'Title', icons = null, urlProject = null, urlRepository = null, oneButton = false }) => {
  return (
    <ContainerSingle>
      <PostWidth>
        {img &&
          <ContainerImagePost>
            <Image name={img} />
          </ContainerImagePost>}
        <TitleSingle>{title}</TitleSingle>
        {children}
        {icons &&
          <ContainerTechnologies>
            <SubTitleSingle>Tecnologías</SubTitleSingle>
            <ContainerIcons>
              {
                icons.map((icon, id) =>
                  <div key={id}>
                    {icon}
                  </div>
                )
              }
            </ContainerIcons>
          </ContainerTechnologies>}
        <ContainerButtons>
          {urlProject &&
            <Anchor href={urlProject} target='_blank' oneButton={oneButton}>
              <Button>Proyecto</Button>
            </Anchor>}
          {urlRepository &&
            <Anchor href={urlRepository} target='_blank' oneButton={oneButton}>
              <Button>Repositorio</Button>
            </Anchor>}
        </ContainerButtons>
      </PostWidth>
    </ContainerSingle>
  )
}
