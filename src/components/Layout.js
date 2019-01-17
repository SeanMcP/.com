import React from 'react'
import styled from 'styled-components'

import '../styles/_index.css'
import Header from './Header'
import Responsive from './common/Responsive'
import Footer from './Footer'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
`

const StyledMain = styled.main`
  flex: 1;
`

const Layout = ({ location, title, children }) => {
  return (
    <StyledContainer>
      <Header location={location} title={title} />
      {/* <StyledMain> */}
      <Responsive modifier="layout">
        <main>{children}</main>
      </Responsive>
      {/* </StyledMain> */}
      <Footer />
    </StyledContainer>
  )
}

export default Layout
