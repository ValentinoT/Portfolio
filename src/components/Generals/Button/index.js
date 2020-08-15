import React from 'react'
import { StyledButton } from './styles'

export const Button = ({ children, icon = null, className = null }) => {
  return (
    <StyledButton>
      <span className='button-text'>{children}</span>
      {icon}
    </StyledButton>
  )
}
