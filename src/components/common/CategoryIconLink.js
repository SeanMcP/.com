import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import CategoryIcon from './CategoryIcon'

const CategoryIconLink = props => {
  return (
    <Link to={`/category/${props.category}`}>
      <CategoryIcon {...props} />
    </Link>
  )
}

export default CategoryIconLink
