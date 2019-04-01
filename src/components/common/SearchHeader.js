import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import capitalize from 'lodash/capitalize'

import PageHeader from './PageHeader'

const SearchHeader = ({ queryKey, queryValue }) => {
  const capValue = capitalize(queryValue)
  return (
    <PageHeader heading={capValue}>
      <p>
        All the articles in the “<strong>{capValue}</strong>”{' '}
        {queryKey.toLowerCase()}. <Link to="/articles/">View all articles</Link>
        .
      </p>
    </PageHeader>
  )
}

SearchHeader.propTypes = {
  queryKey: PropTypes.string.isRequired,
  queryValue: PropTypes.string.isRequired
}

export default SearchHeader
