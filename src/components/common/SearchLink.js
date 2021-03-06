import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components/macro'
import kebabCase from 'lodash/kebabCase'

import { capitalize } from '../../utils/StringUtils'

const StyledLink = styled(Link)`
  &:not(:last-of-type) {
    margin-right: 0.25rem;
  }
`

const queryMap = {
  categories: 'category'
}

const SearchLink = ({ queryKey, queryValue }) => (
  <StyledLink to={`/${queryMap[queryKey]}/${kebabCase(queryValue)}/`}>
    {queryKey === 'categories' ? capitalize(queryValue) : queryValue}
  </StyledLink>
)

SearchLink.propTypes = {
  className: PropTypes.string,
  queryKey: PropTypes.string.isRequired,
  queryValue: PropTypes.string.isRequired
}

export default SearchLink
