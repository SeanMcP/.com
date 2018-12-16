import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import MainNav from './MainNav'
import Responsive from './common/Responsive'

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  @media screen and (max-width: 832px) {
    flex-direction: column;
  }
`

const Header = props => {
  return (
    <header className="Header">
      <Responsive>
        <StyledContainer>
          <Link className="_logo-link" to={'/'}>
            {props.title}
          </Link>
          <MainNav location={props.location} />
        </StyledContainer>
      </Responsive>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired
}

export default Header
