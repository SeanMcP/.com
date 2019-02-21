import styled from 'styled-components'
import { Link } from 'gatsby'

export const Article = styled.article`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 4rem 1fr;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    grid-template-columns: 1fr;

    /* Category Link Icon */
    > a {
      margin: 0 auto;

      img {
        width: 4rem;
      }
    }
  }
`

export const MetaContainerDiv = styled.div`
  font-size: 90%;
  margin: 0.5rem 0;
  > div {
    display: inline;
  }
`

export const H3 = styled.h3`
  margin: 0;
`

export const SummaryP = styled.p`
  margin: 0;
`

export const ReadMoreLink = styled(Link)`
  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    display: block;
    margin-top: 0.5rem;
  }
`
