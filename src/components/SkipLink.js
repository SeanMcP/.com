import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  border: 1px dotted ${p => p.theme.accent};
  left: -9999px;
  padding: 1rem;
  position: absolute;
  top: 0;
  z-index: 9999;

  &:focus {
    left: 0;
  }
`

const SkipLink = () => {
  return <StyledLink to="#main">Skip to main content</StyledLink>
}

export default SkipLink
