import styled from 'styled-components'

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ size = '28px' }) => size};
  font-weight: 600;
  transition: all 0.15s linear;
`
export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ size = '16px' }) => size};
  font-weight: 400;
  transition: all 0.15s linear;
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ size = '14px' }) => size};
  padding-top: ${({ pt = '0px' }) => pt};
  line-height: ${({ lh = '20px' }) => lh};
  font-weight: 300;
  transition: all 0.15s linear;
`
