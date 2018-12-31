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

const StyledResponsive = styled(Responsive)`
  flex: 1;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <StyledContainer>
        <Header location={location} title={title} />
        <StyledResponsive modifier="layout">{children}</StyledResponsive>
        <Footer />
      </StyledContainer>
    )
  }
}

export default Layout
