import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import THEME from '../styles/theme'

import MainNav from './MainNav'
import Responsive from './common/Responsive'

const StyledHeader = styled.header`
  box-shadow: 0 0 1rem rgba(207, 199, 199, 0.125);
  padding: 1rem 0;
  margin-bottom: 2rem;
`

const StyledLink = styled(Link)`
  font-family: var(--display-font);
  font-size: 125%;

  @media screen and (max-width: ${THEME.SIZE_MOBILE}) {
    font-size: 150%;
    margin-bottom: 1rem;
  }
`

const Header = props => {
  return (
    <StyledHeader>
      <Responsive alignItems="center" justifyContent="space-between">
        <StyledLink to={'/'}>
          {props.title}
        </StyledLink>
        <MainNav location={props.location} />
      </Responsive>
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
