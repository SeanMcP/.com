import React from 'react'
import styled from 'styled-components/macro'

const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: ${p => p.theme.size};
  width: 100%;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    margin-left: 1rem;
    margin-right: 1rem;
    width: initial;
  }
`

const ContentContainer = ({ children, ...props }) => {
  return <Section {...props}>{children}</Section>
}

export default ContentContainer
