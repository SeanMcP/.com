import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import '../styles/_index.css'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/styles'
import Billboard from './Billboard'
import Header from './Header'
import Responsive from './common/Responsive'
import Footer from './Footer'
import SkipLink from './SkipLink'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
`

const StyledResponsive = styled(Responsive)`
  flex: 1;
  margin-bottom: 2rem;
  margin-top: 1rem;
`

const StyledMain = styled.main`
  padding: 1rem 0;
`

const Layout = ({ location, title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <SkipLink />
        <GlobalStyle />
        <Header location={location} title={title} />
        <Billboard isRoot={location.pathname === '/'} />
        <StyledResponsive>
          <StyledMain id="main">{children}</StyledMain>
        </StyledResponsive>
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  )
}

export default Layout
