import React from 'react'
import styled from 'styled-components'

import THEME from '../../styles/theme'

const StyledSection = styled.section`
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  display: ${({ alignItems, flex, justifyContent }) =>
    flex || justifyContent || alignItems ? 'flex' : 'initial'};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  width: 100%;

  @media screen and (max-width: ${THEME.SIZE_MOBILE}) {
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
    width: initial;
  }
`

const Responsive = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>
}

export default Responsive
