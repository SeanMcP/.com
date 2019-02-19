import { Link as _Link } from 'gatsby'
import styled, { css } from 'styled-components'

export const Header = styled.header`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.125);
  padding: 1rem 0;
  position: relative;
`

export const Link = styled(_Link)`
  align-items: center;
  display: flex;
`

export const Button = styled.button`
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-right: -0.5rem;

  ${props =>
    props.isOpen &&
    css`
      color: ${props.theme.primary_dark};
    `}
`
