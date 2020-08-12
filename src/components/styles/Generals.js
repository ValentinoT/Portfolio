import styled from 'styled-components'

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`
}

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ size = '28px' }) => size};
  font-weight: ${({ weight = 600 }) => weight};
  transition: all 0.15s linear;
  @media ${device.tablet}{
    font-size: 24px;
  }
  @media ${device.mobileM}{
    font-size: 20px;
  }
  @media ${device.mobileS}{
    font-size: 16px;
  }
`
export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ size = '16px' }) => size};
  font-weight: 400;
  transition: all 0.15s linear;
  @media ${device.mobileM}{
    font-size: 14px;
  }
`
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ size = '14px' }) => size};
  padding-top: ${({ pt = '0px' }) => pt};
  padding-bottom: ${({ pb = '0px' }) => pb};
  line-height: ${({ lh = '20px' }) => lh};
  font-weight: 300;
  transition: all 0.15s linear;
  @media ${device.tablet}{
    padding-top: 16px;
  }
  @media ${device.mobileL}{
    padding-top: 10px;
  }
  @media ${device.mobileS}{
    font-size: 12px;
  }
`
