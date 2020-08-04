import styled from 'styled-components'

export const Icon = styled.svg`
  && g path{
    fill: ${({ theme }) => theme.colors.text}
  }
`
