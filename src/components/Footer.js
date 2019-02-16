import React from 'react'
import styled from 'styled-components'

import Responsive from './common/Responsive'

const StyledFooter = styled.footer`
  background: ${props => props.theme.primary_dark};
  color: ${props => props.theme.secondary_light};
  padding: 1rem 0;

  p {
    margin: 0;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <StyledFooter>
      <Responsive justifyContent="space-between" overrideMobileColumn>
        <p>© Sean McPherson 2018 - {year}</p>
        <p>(SDG)</p>
      </Responsive>
    </StyledFooter>
  )
}

export default Footer
