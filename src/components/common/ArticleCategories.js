import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CategoryLink from './CategoryLink'

const StyledSection = styled.section`
  display: flex;
  margin: 1rem 0;
`

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`

const StyledLi = styled.li`
  display: flex;
  // I don't like this, but it overrides
  // the default li styles that I've used
  margin: 0 0 0 0.25rem !important;
`

const ArticleCategories = ({ list }) => {
  return (
    <StyledSection>
      <span>Categories:</span>
      <StyledUl>
        {list.map((category, i) => (
          <StyledLi key={category.fieldValue}>
            <CategoryLink category={category.fieldValue} hideIcon />
            {i !== list.length - 1 && ','}
          </StyledLi>
        ))}
      </StyledUl>
    </StyledSection>
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
