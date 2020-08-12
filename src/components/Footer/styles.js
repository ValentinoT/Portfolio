import styled, { css } from 'styled-components'
import { device } from '../styles/Generals'

export const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  @media ${device.laptop}{
    ${({ about }) => about && css`
      border-radius: 5px 5px 0 0;
      background-color: ${({ theme }) => theme.colors.backgroundFooterTablet};
      box-shadow: ${({ theme }) => theme.colors.shadow};
    `}
  }
  @media ${device.tablet}{
    display: none;
  }
`

export const ContainerFooterLeft = styled.div`
  display: flex;
  flex-grow: 1;
  @media ${device.laptop}{
    flex-direction: column;
  }
`

export const AllRightsReserved = styled.div`
  display: flex;
  align-items: center;
  && svg{
    margin: 0 4px;
  }
  @media ${device.laptop}{
    margin-top: 10px;
  }
`
