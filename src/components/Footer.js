import React from 'react'
import styled from 'styled-components/macro'

import ContentContainer from './ContentContainer'

const StyledFooter = styled.footer`
  padding: 0 0 2rem;

  p {
    margin: 0;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <StyledFooter>
      <hr />
      <ContentContainer>
        <p>© Sean McPherson 2018 - {year} (SDG)</p>
      </ContentContainer>
    </StyledFooter>
  )
}

export default Footer
