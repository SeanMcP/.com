import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'

import '../styles/_index.css'
import { theme } from '../styles/theme'
import GlobalStyle from '../styles/styles'
import Billboard from './Billboard'
import Header from './Header'
import Responsive from './common/Responsive'
import Footer from './Footer'
import SkipLink from './SkipLink'

import * as S from './Layout.styled'
import ContentContainer from './ContentContainer'
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

const Layout = ({ freeform, location, title, children }) => {
  const Wrapper = freeform ? React.Fragment : ContentContainer
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <SkipLink />
        <Header />
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
