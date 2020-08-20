import React from 'react'
import { ContainerSingle, PostWidth, ContainerImagePost, TitleSingle, SubTitleSingle, ContainerTechnologies, ContainerIcons, ContainerButtons, Anchor } from './styles'
import { Image } from '../Image'
import { Button } from '../Generals/Button'

export const Single = ({ children, img = null, title = 'Title', icons = null, urlProject = null, urlRepository = null }) => {
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
        {(urlProject && urlRepository) &&
          <ContainerButtons>
            <Anchor href={urlProject} target='_blank'>
              <Button>Proyecto</Button>
            </Anchor>
            <Anchor href={urlRepository} target='_blank'>
              <Button>Repositorio</Button>
            </Anchor>
          </ContainerButtons>}
      </PostWidth>
    </ContainerSingle>
  )
}
