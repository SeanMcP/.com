import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  background: ${p => p.theme.primary_dark};
  color: white !important;
  font-weight: bold;
  padding: 1rem;
  position: absolute;
  right: 100%;
  top: 0;
  z-index: 9999;

  &:focus {
    left: 0;
    right: initial;
  }
`

const SkipLink = () => {
  React.useEffect(() => {
    window.addEventListener('hashchange', moveFocus)
    return () => window.removeEventListener('hashchange', moveFocus)
  })
  function moveFocus() {
    if (location.hash === '#main') {
      document.getElementById('main').focus()
    }
  }
  return <StyledLink href="#main">Skip to main content</StyledLink>
}

export default SkipLink
