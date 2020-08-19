import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Reset } from './styles/Reset'
import { ThemeProvider } from 'styled-components'
import { useTheme } from '../hooks/useTheme'
import { themes } from '../themes'
import { Header } from './Header'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { GeneralContainer, MainContainer } from '../components/styles/Generals'

export default function Layout ({ children }) {
  const [theme, toggleTheme] = useTheme()
  return (
    <>
      <Helmet>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap' rel='stylesheet' />
      </Helmet>
      <ThemeProvider theme={themes[theme]}>
        <GeneralContainer>
          <Reset />
          <Header toggleTheme={toggleTheme} themeMode={theme} />
          <MainContainer>
            <Navbar />
            {children}
          </MainContainer>
          <Footer />
        </GeneralContainer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
