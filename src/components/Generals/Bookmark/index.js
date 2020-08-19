import React from 'react'
import { ContainerBookmark, ContainerText, TitleSite, DescriptionSite, ContainerLink, Favicon, Url, ContainerImagePage } from './styles'
import { useMetadata } from '../../../hooks/useMetadata'

export const Bookmark = ({ url }) => {
  const [name, description, favicon, image] = useMetadata(url)
  return (
    <ContainerBookmark href={url} target='_blanck'>
      <ContainerText>
        <TitleSite>{name}</TitleSite>
        <DescriptionSite>{description}</DescriptionSite>
        <ContainerLink>
          <Favicon src={favicon} alt={name} />
          <Url>{url}</Url>
        </ContainerLink>
      </ContainerText>
      <ContainerImagePage src={image} alt={name} />
    </ContainerBookmark>
  )
}
