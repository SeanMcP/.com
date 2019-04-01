import styled from 'styled-components/macro'
import { Link as _Link } from 'gatsby'

export const Nav = styled.nav`
  display: inline;
`

export const Link = styled(_Link)`
  margin-left: 1rem;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    margin: 0;
    padding: 0 0.5rem;
  }
`
