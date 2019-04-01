import styled from 'styled-components/macro'
import _ExternalLink from '../common/ExternalLink'
import _Icon from '../common/Icon'

export const Container = styled.div`
  @media screen and (min-width: ${p => p.theme.size}) {
    align-items: center;
    display: flex;
  }
`

export const Header = styled.header`
  align-items: center;
  display: flex;

  @media screen and (min-width: ${p => p.theme.size}) {
    display: inline-flex;
  }

  @media screen and (max-width: ${p => p.theme.size}) {
    margin-bottom: 1rem;
  }
`

export const ExternalLink = styled(_ExternalLink)`
  align-items: center;
  display: flex;

  @media screen and (max-width: ${p => p.theme.size}) {
    border: 1px solid ${p => p.theme.primary};
    border-radius: 0.5rem;
    justify-content: center;
    margin-top: 0.5rem;
    padding: 0.5rem;
  }

  @media screen and (min-width: ${p => p.theme.size}) {
    display: inline;
    margin-left: 0.25rem;

    svg {
      display: none;
    }

    &:not(:last-of-type)::after {
      content: ',';
    }

    &:last-of-type::before {
      content: 'or ';
    }
  }
`

export const Icon = styled(_Icon)`
  margin-right: 0.5rem;
`

export const Nav = styled.nav`
  display: inline;
`
