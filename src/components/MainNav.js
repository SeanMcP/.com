import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { KEY, onKey } from 'onkey-event-manager'

const links = [
  {
    destination: '/',
    text: 'Home'
  },
  {
    destination: '/articles/',
    text: 'Articles'
  },
  {
    destination: '/about/',
    text: 'About'
  },
  {
    destination: '/contact/',
    text: 'Contact'
  }
]

const StyledNav = styled.nav`
  background: ${props => props.theme.primary_dark};
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 100%;
  width: 100%;

  @media screen and (max-width: ${props => props.theme.size_mobile}) {
    align-items: center;
    flex-direction: column;
    justify-content: initial;
  }
`

const StyledLink = styled(({ isCurrent, ...props }) => <Link {...props} />)`
  color: ${props => props.theme.secondary_light};
  padding: 0.5rem 1rem;

  &:visited,
  &:hover,
  &:active {
    color: ${props => props.theme.secondary_light};
  }
  &:focus {
    outline-color: ${props => props.theme.accent};
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      text-decoration: underline;
    `}
`

class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focusIndex: 0
    }
  }
  componentDidMount() {
    this.focusChild()
  }
  render() {
    const { id, location } = this.props
    const linkKeyActionMap = {
      [KEY.Home]: this.setFocusFirst,
      [KEY.End]: this.setFocusLast,
      [KEY.Escape]: this.closeAndFocus,
      [KEY.ArrowUp]: this.decrementFocusIndex,
      [KEY.ArrowDown]: this.incrementFocusIndex
    }
    return (
      <StyledNav id={id} ref={el => (this.nav = el)}>
        {links.map(link => (
          <StyledLink
            isCurrent={location.pathname === link.destination}
            key={link.destination}
            to={link.destination}
            role="menuitem"
            onKeyDown={onKey(linkKeyActionMap)}
          >
            {link.text}
          </StyledLink>
        ))}
      </StyledNav>
    )
  }
  setFocusFirst = () => {
    this.setState({ focusIndex: 0 }, this.focusChild)
  }
  setFocusLast = () => {
    this.setState(
      { focusIndex: this.nav.childElementCount - 1 },
      this.focusChild
    )
  }
  closeAndFocus = () => {
    this.props.focusMenuButton()
    this.props.close()
  }
  focusChild = () => {
    if (this.nav) this.nav.childNodes[this.state.focusIndex].focus()
  }
  decrementFocusIndex = () => {
    this.setState(prevState => {
      const proposedIndex = prevState.focusIndex - 1
      const maxIndex = this.nav.childElementCount - 1
      return {
        focusIndex: proposedIndex < 0 ? maxIndex : proposedIndex
      }
    }, this.focusChild)
  }
  incrementFocusIndex = () => {
    this.setState(prevState => {
      const proposedIndex = prevState.focusIndex + 1
      const maxIndex = this.nav.childElementCount - 1
      return {
        focusIndex: proposedIndex > maxIndex ? 0 : proposedIndex
      }
    }, this.focusChild)
  }
}

MainNav.propTypes = {
  focusMenuButton: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired
}

export default MainNav
