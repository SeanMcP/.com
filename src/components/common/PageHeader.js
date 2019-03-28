import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components/macro'

const StyledDiv = styled.div`
  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}
  margin-top: 1rem;

  > *:first-child {
    margin-top: 0;
  }
`

const PageHeader = ({ centered, children, heading }) => {
  return (
    <StyledDiv centered={centered}>
      <h2>{heading}</h2>
      {children}
      <hr />
    </StyledDiv>
  )
}

PageHeader.propTypes = {
  centered: PropTypes.bool
}

export default PageHeader
