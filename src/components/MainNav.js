import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

const links = [
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

const StyledLink = styled(({ isCurrent, ...props }) => <Link {...props} />)`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  ${({ isCurrent }) =>
    isCurrent &&
    css`
      text-decoration: underline;
    `}
`

const MainNav = ({ location }) => {
  return (
    <nav>
      {links.map(link => (
        <StyledLink
          isCurrent={location.pathname === link.destination}
          key={link.destination}
          tabIndex={0}
          to={link.destination}
        >
          {link.text}
        </StyledLink>
      ))}
    </nav>
  )
}

MainNav.propTypes = {
  location: PropTypes.object.isRequired
}

export default MainNav
