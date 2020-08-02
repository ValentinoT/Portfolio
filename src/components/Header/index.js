import React from 'react'
import { ButtonToggleTheme } from './styles'
import { Sun } from '../../icons/Sun'

export const Header = ({ toggleTheme }) => {
  return (
    <>
      <h1>Hola</h1>
      <ButtonToggleTheme onClick={toggleTheme}><Sun /></ButtonToggleTheme>
    </>
  )
}
