import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledDiv = styled.div`
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  >*:first-child {
    margin-top: 0;
  }
`

const PageHeader = ({ centered, children }) => {
  return (
    <StyledDiv centered={centered}>
      {children}
      <hr />
    </StyledDiv>
  )
}

PageHeader.propTypes = {
  centered: PropTypes.bool
}

export default PageHeader
