import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { KEY, onKey } from 'onkey-event-manager'

import Icon from './common/Icon'
import MainNav from './MainNav'
import Open from './common/Open'
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

const Header = props => {
  const menuButton = React.createRef()
  function focusMenuButton() {
    menuButton.current.focus()
  }
  return (
    <Open>
      {openProps => (
        <StyledHeader>
          <Responsive
            alignItems="center"
            justifyContent="space-between"
            overrideMobileColum
          >
            <StyledLink to={'/'}>{props.title}</StyledLink>
            <StyledButton
              aria-controls="MainNav"
              aria-label={`${
                openProps.isOpen ? 'Close' : 'Open'
              } main navigation`}
              aria-haspopup={true}
              aria-expanded={openProps.isOpen}
              onClick={openProps.toggle}
              onKeyDown={onKey({
                [KEY.ArrowDown]: openProps.open
              })}
              ref={menuButton}
              isOpen={openProps.isOpen}
            >
              <Icon icon={'Menu'} />
            </StyledButton>
          </Responsive>
          {openProps.isOpen && (
            <MainNav
              focusMenuButton={focusMenuButton}
              id="MainNav"
              location={props.location}
              {...openProps}
            />
          )}
        </StyledHeader>
      )}
    </Open>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
}

export default Header
