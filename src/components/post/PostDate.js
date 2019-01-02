import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../common/Icon'

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const PostDate = ({ date, hideIcon }) => {
  return (
    <StyledDiv>
      {!hideIcon && <StyledIcon icon={'Calendar'} />}
      <time>{date}</time>
    </StyledDiv>
  )
}

PostDate.propTypes = {
  date: PropTypes.string.isRequired,
  hideIcon: PropTypes.bool,
  modifier: PropTypes.string
}

export default PostDate
