import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  align-items: center;
  background: linear-gradient(
    -10deg,
    ${props => props.theme.primary_dark},
    ${props => props.theme.tertiary_dark}
  );
  color: white;
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  max-height: 100vh;
  padding: 0 1rem;
  text-align: center;

  p {
    margin-top: 0;
  }
`

const Billboard = ({ isRoot }) => {
  if (!isRoot) {
    return null
  }
  return (
    <StyledSection>
      <h1>Sean McP</h1>
      <p>Software developer</p>
    </StyledSection>
  )
}

export default Billboard