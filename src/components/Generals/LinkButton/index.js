import React from 'react'
import { StyledButton, StyledLink } from './styles'

export const LinkButton = ({ children, icon = null, url = '#', className = null }) => {
  return (
    <StyledLink to={url} className={className}>
      <StyledButton>
        <span className='button-text'>{children}</span>
        {icon}
      </StyledButton>
    </StyledLink>
  )
}
