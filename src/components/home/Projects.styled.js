import styled from 'styled-components'

export const StyledCategoryUl = styled.ul`
  list-style-type: none;
  padding: 0;

  li:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`

export const StyledProjectsUl = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
`
