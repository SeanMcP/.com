import styled from 'styled-components/macro'

import _Icon from '../common/Icon'
import _Thumbnail from '../common/Thumbnail'

export const Section = styled.section`
  display: flex;
  margin-bottom: 1rem;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    flex-direction: column;
  }
`

export const Thumbnail = styled(_Thumbnail)`
  height: 5rem;
  margin-right: 1rem;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    height: initial;
    margin: 0 auto 1rem;
    width: 8rem;
  }
`

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const Li = styled.li`
  align-items: center;
  display: flex;
  margin-bottom: 0;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    &:not(:last-child) {
      margin: 0 0 1rem;
    }
  }
`

export const Icon = styled(_Icon)`
  margin-right: 0.5rem;
`

export const Content = styled.div`
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
`
