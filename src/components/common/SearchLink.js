import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { capitalize } from '../../utils/StringUtils'

const StyledLink = styled(Link)`
  &:not(:last-of-type) {
    margin-right: 0.25rem;

    ::after {
      content: ',';
    }
  }
`

const SearchLink = ({ queryKey, queryValue }) => (
  <StyledLink to={`/${queryKey}/${queryValue}`}>
    {queryKey === 'categories' ? capitalize(queryValue) : queryValue}
  </StyledLink>
)

SearchLink.propTypes = {
  className: PropTypes.string,
  queryKey: PropTypes.string.isRequired,
  queryValue: PropTypes.string.isRequired
}

export default SearchLink
