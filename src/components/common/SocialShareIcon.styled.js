import React from 'react'
import styled from 'styled-components/macro'
import _Icon from './Icon'
import _ExternalLink from './ExternalLink'

const transitionStyles = `
  transition: all 100ms ease-in-out;
`

export const Icon = styled(({ color, ...props }) => <_Icon {...props} />)`
  ${transitionStyles}
  z-index: 1;

  > *:not(line):not(polyline) {
    fill: ${p => p.color};
    stroke-width: 0;
  }
  > line,
  > polyline {
    stroke: ${p => p.color};
  }
`

const sizeStyles = `
  height: 48px;
  width: 48px;
`

const circleStyles = `
  ${sizeStyles}
  ${transitionStyles}
  border-radius: 10rem;
  position: absolute;
  margin: auto;
`

export const InnerCircle = styled.span`
  ${circleStyles}
  background: ${p => p.color};
  opacity: 0;
`

export const OuterCircle = styled.span`
  ${circleStyles}
  border: 2px solid ${p => p.color};
`

export const Name = styled.span`
  ${transitionStyles}
  color: ${p => p.color};
  font-size: 0.75rem;
  opacity: 0;
  position: absolute;
  transform: scale(0.5);
  text-decoration: none;
`

export const ExternalLink = styled(_ExternalLink)`
  ${sizeStyles}
  align-items: center;
  box-shadow: initial !important;
  display: flex;
  justify-content: center;
  margin: 0 1rem;
  outline: none;
  position: relative;

  &:hover,
  &:focus {
    ${Icon} {
      > *:not(line):not(polyline) {
        fill: ${p => p.theme.text_inverse};
      }
      > line,
      > polyline {
        stroke: ${p => p.theme.text_inverse};
      }
    }
    ${OuterCircle} {
      border-color: ${p => p.theme.accent};
      transform: scale(1.25);
    }
    ${InnerCircle} {
      opacity: 1;
    }
    ${Name} {
      opacity: 1;
      transform: scale(1) translate(0, 275%);
    }
  }

  @media screen and (max-width: ${p => p.theme.size}) {
    margin: 0 0.5rem;
  }
`
