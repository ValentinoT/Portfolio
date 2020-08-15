import { useState, useEffect } from 'react'

export const useInput = (initialValue, textInputId, textLabelId) => {
  const [value, setvalue] = useState(initialValue)
  const onChange = (e) => setvalue(e.target.value)
  const reset = () => setvalue('')
  const removeActive = () => document.querySelector(`#${textLabelId}`).classList.remove('active')

  useEffect(() => {
    const inputId = document.querySelector(`#${textInputId}`)
    const labelId = document.querySelector(`#${textLabelId}`)
    inputId.addEventListener('focus', () => {
      labelId.classList.add('active')
    })
    if (value === '') {
      inputId.addEventListener('focusout', () => {
        labelId.classList.remove('active')
      })
    }
    if (value !== '') {
      inputId.addEventListener('focusout', () => {
        labelId.classList.add('active')
      })
    }
  }, [value])

  return { value, onChange, reset, removeActive }
}
