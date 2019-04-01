import styled from 'styled-components/macro'
import _Icon from '../common/Icon'

export const Container = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: ${p => p.theme.size}) {
    flex-direction: column;
    text-align: center;
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

export const Message = styled.span`
  @media screen and (min-width: ${p => p.theme.size}) {
    margin-right: 0.5rem;
    &::after {
      content: ':';
    }
  }
`

export const Icon = styled(_Icon)`
  margin-right: 0.5rem;
`

export const Nav = styled.nav`
  display: flex;
`
