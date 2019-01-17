import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import '../styles/_index.css'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/styles'
import Header from './Header'
import Responsive from './common/Responsive'
import Footer from './Footer'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
`

const Layout = ({ location, title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Header location={location} title={title} />
        <GlobalStyle />
        <Responsive modifier="layout">
          <main>{children}</main>
        </Responsive>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
