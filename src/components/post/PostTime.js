import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

import Icon from '../common/Icon'

const StyledDiv = styled.div`
  align-items: center;
  display: flex;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const PostTime = ({ time, hideIcon }) => {
  return (
    <StyledDiv>
      {!hideIcon && <StyledIcon icon={'Watch'} />}
      <span>{time} min read</span>
    </StyledDiv>
  )
}

PostTime.propTypes = {
  time: PropTypes.number.isRequired,
  hideIcon: PropTypes.bool
}

export default PostTime
