import React from 'react'
import PropTypes from 'prop-types'
import SearchLink from './SearchLink'

const CategoryLink = ({ category }) => {
  return <SearchLink queryKey={'categories'} queryValue={category} />
}

CategoryLink.propTypes = {
  category: PropTypes.string.isRequired
}

export default CategoryLink
