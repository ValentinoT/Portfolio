import { useState, useEffect } from 'react'

export const useMetadata = (url) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [favicon, setFavicon] = useState('')
  const [image, setImage] = useState('')

  const CleanText = (text) => {
    if (text !== null) {
      let textReady = text.split('&#xe1;').join('á')
      textReady = textReady.split('&#xE1;').join('á')
      textReady = textReady.split('&#xe9;').join('é')
      textReady = textReady.split('&#xE9;').join('é')
      textReady = textReady.split('&#xed;').join('í')
      textReady = textReady.split('&#xED;').join('í')
      textReady = textReady.split('&#xf3;').join('ó')
      textReady = textReady.split('&#xF3;').join('ó')
      textReady = textReady.split('&#xfa;').join('ú')
      textReady = textReady.split('&#xFA;').join('ú')
      textReady = textReady.split('&#xf1;').join('ñ')
      textReady = textReady.split('&#xF1;').join('ñ')
      textReady = textReady.substr(0, 125)

      return textReady
    }
  }

  const endDescription = (text) => {
    return `${text}...`
  }

  useEffect(() => {
    window.fetch(`https://url-metadata.herokuapp.com/api/metadata?url=${url}`)
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
