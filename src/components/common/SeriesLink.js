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

const SeriesLink = ({ series, hideIcon }) => {
  return (
    <StyledDiv>
      {!hideIcon && <StyledIcon icon={'List'} />}
      <SearchLink queryKey={'series'} queryValue={series} />
    </StyledDiv>
  )
}

SeriesLink.propTypes = {
  series: PropTypes.string.isRequired,
  hideIcon: PropTypes.bool
}

export default SeriesLink
