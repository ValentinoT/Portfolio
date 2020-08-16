import styled from 'styled-components'
import { device, SubTitle, Text } from '../styles/Generals'

export const Form = styled.form`
  width: 100%;
  && button{
    width: 100%;
    justify-content: center;
  }
`

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
  position: absolute; 
  top: 13px;
  left: 10px;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.15s linear;
  &&.active{
    font-size: 12px;
    top: -10px;
  }
`

export const InputText = styled.input`
  font-family: 'Poppins',sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 10px 20px;
  @media ${device.tablet}{
    margin-bottom: 16px;
  }
`

export const InputTextarea = styled.textarea`
  font-family: 'Poppins',sans-serif;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100px;
  min-height: 100px;
  max-height: 100px;
  margin-bottom: 20px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 10px 20px;
  @media ${device.tablet}{
    margin-bottom: 16px;
  }
`

export const ContainerMessageSent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled(SubTitle)`
  padding: 20px 0; 
  @media ${device.mobileM}{
    font-size: 22px;
  }
`

export const TextSent = styled(Text)`
  text-align: center;
  max-width: 350px;
  @media ${device.tablet}{
    padding-top: 0;
  }
`
