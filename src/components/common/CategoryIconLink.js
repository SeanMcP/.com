import React from 'react'
import { Link } from 'gatsby'
import capitalize from 'lodash/capitalize'

import CategoryIcon from './CategoryIcon'

const CategoryIconLink = ({ showLabel, ...props }) => {
  return (
    <Link to={`/category/${props.category}`}>
      <CategoryIcon {...props} style={{ width: '1rem' }} />
      {showLabel && <b>{capitalize(props.category)}</b>}
    </Link>
  )
}

export default CategoryIconLink
