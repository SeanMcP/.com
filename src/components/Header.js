import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { KEY, onKey } from 'onkey-event-manager'

import useOpen from '../hooks/useOpen'

import HeaderLogo from './common/HeaderLogo'
import Icon from './common/Icon'
import MainNav from './MainNav'
import Responsive from './common/Responsive'

import * as Styled from './Header.styled'

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
    <Styled.Header>
      <Responsive
        alignItems="center"
        justifyContent="space-between"
        overrideMobileColumn
      >
        <Styled.Link to={'/'}>
          <HeaderLogo />
        </Styled.Link>
        {/* <Styled.Link to={'/'}>{title}</Styled.Link> */}
        <Styled.Button
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
        </Styled.Button>
      </Responsive>
      {isOpen && (
        <MainNav
          focusMenuButton={focusMenuButton}
          id="MainNav"
          location={location}
          close={close}
        />
      )}
    </Styled.Header>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
}

export default Header
