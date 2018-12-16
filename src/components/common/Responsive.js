import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 800px;

  @media screen and (max-width: 832px) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: initial;
  }
`

const Responsive = ({ children }) => {
  return <StyledSection>{children}</StyledSection>
}

export default Responsive
