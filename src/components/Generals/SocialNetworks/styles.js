import styled from 'styled-components'

export const ContainerSocialNetworks = styled.div`
  display: flex;
`

export const SocialNetwork = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.yellow};
  border-radius: 5px;
  margin-right: 20px;
  transition: all 0.15s linear;
  &&:hover{
    box-shadow: 0 2px 13px 0 rgba(247,223,30,.1);
  }
  &&:active{
    transform: scale(.9);
  }
`
