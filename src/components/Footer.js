import React from 'react'
import styled from 'styled-components'

import Responsive from './common/Responsive'

const StyledFooter = styled.footer`
  background: ${props => props.theme.primary_dark};
  color: ${props => props.theme.secondary_light};
  margin-top: 4rem;
  padding: 1rem 0;

  p {
    margin: 0;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <Responsive justifyContent="space-between">
        <p className="_attribution">© Sean McPherson 2018</p>
        <p className="_sdg">(SDG)</p>
      </Responsive>
    </StyledFooter>
  )
}

export default Footer
