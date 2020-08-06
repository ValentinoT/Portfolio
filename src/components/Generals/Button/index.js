import React from 'react'
import { StyledButton } from './styles'

export const Button = ({ children, icon }) => {
  return (
    <StyledButton>
      <span className='button-text'>{children}</span>
      {icon || null}
    </StyledButton>
  )
}
