import styled from 'styled-components'

export const Icon = styled.svg`
  & path {
    fill: ${({ theme }) => theme.colors.title}
  }
`
