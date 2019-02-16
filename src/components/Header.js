import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { KEY, onKey } from 'onkey-event-manager'

import Icon from './common/Icon'
import MainNav from './MainNav'
import useOpen from '../hooks/useOpen'
import Responsive from './common/Responsive'

const StyledHeader = styled.header`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.125);
  padding: 1rem 0;
  position: relative;
`

const StyledLink = styled(Link)`
  font-family: var(--display-font);
  font-size: 125%;
  font-weight: bold;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    font-size: 150%;
  }
`

const StyledButton = styled.button`
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

const Header = ({ title, location }) => {
  const { close, isOpen, open, toggle } = useOpen()
  const menuButton = React.useRef()
  function focusMenuButton() {
    menuButton.current.focus()
  }
  function openMenu(e) {
    e.preventDefault()
    open()
  }
  return (
    <StyledHeader>
      <Responsive
        alignItems="center"
        justifyContent="space-between"
        overrideMobileColumn
      >
        <StyledLink to={'/'}>{title}</StyledLink>
        <StyledButton
          // Doesn't work with the nav only rendering on open
          // aria-controls="MainNav"
          aria-label={`${isOpen ? 'Close' : 'Open'} main navigation`}
          aria-haspopup={true}
          aria-expanded={isOpen}
          onClick={toggle}
          onKeyDown={onKey({
            [KEY.ArrowDown]: openMenu
          })}
          ref={menuButton}
          isOpen={isOpen}
        >
          <Icon icon={'Menu'} />
        </StyledButton>
      </Responsive>
      {isOpen && (
        <MainNav
          focusMenuButton={focusMenuButton}
          id="MainNav"
          location={location}
          close={close}
        />
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
}

export default Header
