import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 12px 40px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.15s linear;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  &&:hover{
    box-shadow: 0 2px 13px 0 rgba(247,223,30,.1);
  }
  &&:active{
    transform: scale(.9);
  }
  && .button-text{
    font-size: 18px;
    font-weight: 600;
    color: #000000;
  }
  && svg{
    margin-left: 10px;
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
`
