import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${p => p.theme.size};
  min-height: 100vh;
  width: 100%;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    margin: 0 1rem;
    max-width: initial;
  }
`

export const Main = styled.main`
  flex: 1;
`
