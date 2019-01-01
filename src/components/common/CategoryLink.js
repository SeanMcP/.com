import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from './Icon'
import SearchLink from './SearchLink'

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const CategoryLink = ({ category, hideIcon }) => {
  return (
    <StyledDiv>
      {!hideIcon && (
        <StyledIcon icon={'Folder'} />
      )}
      <SearchLink queryKey={'categories'} queryValue={category} />
    </StyledDiv>
  )
}

CategoryLink.propTypes = {
  category: PropTypes.string.isRequired,
  hideIcon: PropTypes.bool,
  lede: PropTypes.string,
  modifier: PropTypes.string
}

export default CategoryLink
