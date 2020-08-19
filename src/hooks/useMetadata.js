import { useState, useEffect } from 'react'

export const useMetadata = (url) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [favicon, setFavicon] = useState('')
  const [image, setImage] = useState('')

  const CleanText = (text) => {
    if (text !== null) {
      let textReady = text.replaceAll('&#xe1;', 'á')
      textReady = textReady.replaceAll('&#xE1;', 'á')
      textReady = textReady.replaceAll('&#xe9;', 'é')
      textReady = textReady.replaceAll('&#xE9;', 'é')
      textReady = textReady.replaceAll('&#xed;', 'í')
      textReady = textReady.replaceAll('&#xED;', 'í')
      textReady = textReady.replaceAll('&#xf3;', 'ó')
      textReady = textReady.replaceAll('&#xF3;', 'ó')
      textReady = textReady.replaceAll('&#xfa;', 'ú')
      textReady = textReady.replaceAll('&#xFA;', 'ú')
      textReady = textReady.replaceAll('&#xf1;', 'ñ')
      textReady = textReady.replaceAll('&#xF1;', 'ñ')
      textReady = textReady.substr(0, 125)

      return textReady
    }
  }

  const endDescription = (text) => {
    return `${text}...`
  }

  useEffect(() => {
    fetch(`http://url-metadata.herokuapp.com/api/metadata?url=${url}`)
      .then(function (response) {
        return response.json()
      })
      .then(function (response) {
        const { data } = response
        setName(CleanText(data.siteName))
        setDescription(endDescription(CleanText(data.description)))
        setFavicon(data.favicon)
        setImage(data.image)
      })
  }, [])

  return [name, description, favicon, image]
}
