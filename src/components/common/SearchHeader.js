import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import capitalize from 'lodash/capitalize'

import PageHeader from './PageHeader'

const StyledH1 = styled.h1`
  margin-top: 1rem;
`

const SearchHeader = ({ queryKey, queryValue }) => {
  const capValue = capitalize(queryValue)
  return (
    <PageHeader>
      <div className="SearchHeader">
        <StyledH1>{capValue}</StyledH1>
        <p>
          All the articles in the “<strong>{capValue}</strong>”{' '}
          {queryKey.toLowerCase()}
        </p>
      </div>
    </PageHeader>
  )
}

SearchHeader.propTypes = {
  queryKey: PropTypes.string.isRequired,
  queryValue: PropTypes.string.isRequired
}

export default SearchHeader
