import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from './Icon'
import SearchLink from './SearchLink'

const StyledSpan = styled.span`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const CategoryLink = ({ category, hideIcon, ...props }) => {
  return (
    <StyledSpan {...props}>
      {!hideIcon && <StyledIcon icon={'Folder'} />}
      <SearchLink queryKey={'categories'} queryValue={category} />
    </StyledSpan>
  )
}

CategoryLink.propTypes = {
  category: PropTypes.string.isRequired,
  hideIcon: PropTypes.bool
}

export default CategoryLink
