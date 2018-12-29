import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  align-items: ${props => props.alignItems ? props.alignItems : 'initial'};
  display: ${props => props.flex || props.justifyContent || props.alignItems ? 'flex' : 'initial'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'initial'};
  margin-left: auto;
  margin-right: auto;
  width: 800px;

  @media screen and (max-width: 832px) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: initial;
  }
`

const Responsive = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>
}

export default Responsive
