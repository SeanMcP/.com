import React from 'react'
import PropTypes from 'prop-types'
import capitalize from 'lodash/capitalize'

import * as Styled from './ArticleCategories.styled'

const ArticleCategories = ({ list, navigate }) => {
  const navigateToCategory = ({ target: { value } }) => {
    if (value) navigate(`category/${value}`)
  }
  return (
    <label>
      <span>Categories:</span>
      <Styled.Select onChange={navigateToCategory}>
        <option value="">Select a category</option>
        {list.map(({ fieldValue, totalCount }) => (
          <option value={fieldValue} key={fieldValue}>
            {capitalize(fieldValue)} ({totalCount})
          </option>
        ))}
      </Styled.Select>
    </label>
  )
}

ArticleCategories.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired
    })
  ).isRequired
}

export default ArticleCategories
