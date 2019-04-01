import React from 'react'
import { ThemeProvider } from 'styled-components/macro'

import '../styles/_index.css'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/styles'
import Header from './Header'
import Footer from './Footer'
import SkipLink from './SkipLink'

import * as S from './Layout.styled'
import ContentContainer from './ContentContainer'

const Layout = ({ freeform, location, title, children }) => {
  const Wrapper = freeform ? React.Fragment : ContentContainer
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SkipLink />
        <Header home={location.pathname === '/'} />
        <Wrapper>
          <S.Main role="main" id="main">
            {children}
          </S.Main>
        </Wrapper>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default Layout
