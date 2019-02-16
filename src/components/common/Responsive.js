import React from 'react'
import styled, { css } from 'styled-components'

const StyledSection = styled.section`
  align-items: ${({ alignItems }) => (alignItems ? alignItems : 'initial')};
  display: ${({ alignItems, flex, justifyContent }) =>
    flex || justifyContent || alignItems ? 'flex' : 'initial'};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'initial'};
  margin-left: auto;
  margin-right: auto;
  max-width: ${p => p.theme.size};
  width: 100%;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    ${({ overrideMobileColumn }) =>
      !overrideMobileColumn &&
      css`
        flex-direction: column;
      `};
    margin-left: 1rem;
    margin-right: 1rem;
    width: initial;
  }
`

const Responsive = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>
}

export default Responsive
