import React from 'react'
import styled from 'styled-components'

import THEME from '../styles/theme'

import Responsive from './common/Responsive'

const StyledFooter = styled.footer`
  background: ${THEME.BACKGROUND_SECONDARY};
  color: ${THEME.TEXT_SECONDARY};
  padding: 1rem 0;

  p {
    margin: 0;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Responsive justifyContent="space-between" >
        <p className="_attribution">© Sean McPherson 2018</p>
        <p className="_sdg">(SDG)</p>
      </Responsive>
    </StyledFooter>
  )
}

export default Footer
