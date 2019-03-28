import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import SearchLink from './SearchLink'
import Icon from '../common/Icon'

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const TagLinks = ({ hideIcon, tags }) => {
  return (
    <StyledDiv>
      {!hideIcon && <StyledIcon icon={'Tag'} />}
      {tags.map(tag => (
        <SearchLink key={tag} queryKey={'tags'} queryValue={tag} />
      ))}
    </StyledDiv>
  )
}

TagLinks.propTypes = {
  hideIcon: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default TagLinks
