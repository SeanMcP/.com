import React from 'react'
import styled from 'styled-components'

const StyledAside = styled.aside`
  align-items: center;
  background-color: ${p => p.theme.primary_dark};
  background: linear-gradient(
    -10deg,
    ${p => p.theme.primary_dark},
    ${p => p.theme.extra_dark}
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100vh;
  padding: 5rem 1rem;
  text-align: center;

  p {
    margin: 0;
  }
`

const Billboard = ({ isRoot }) => {
  if (!isRoot) {
    return null
  }
  return (
    <StyledAside>
      <h1>Sean McP</h1>
      <p>
        Christian, husband, father, dog owner, soccer fan,{' '}
        <strong>software developer</strong>
      </p>
    </StyledAside>
  )
}

export default Billboard
