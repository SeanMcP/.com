import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

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

const StyledResponsive = styled(Responsive)`
  flex: 1;
`

const Layout = ({ location, title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <Header location={location} title={title} />
        <GlobalStyle />
        <StyledResponsive>
          <main>{children}</main>
        </StyledResponsive>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
