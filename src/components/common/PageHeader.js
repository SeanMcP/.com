import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
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
    <StyledHeader centered={centered}>
      {children}
      <hr />
    </StyledHeader>
  )
}

PageHeader.propTypes = {
  centered: PropTypes.bool
}

export default PageHeader
