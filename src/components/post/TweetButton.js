import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../common/Icon'

import THEME from '../../styles/theme'

const StyledA = styled.a`
  align-items: center;
  display: flex;
  margin-left: auto;

  @media screen and (max-width: ${THEME.SIZE_MOBILE}) {
    border: 2px solid ${THEME.COLOR_PRIMARY};
    border-radius: 5rem;
    margin-right: auto;
    margin-top: 1rem;
    padding: 1rem 2rem;
    transition: all 100ms ease-in-out;

    &:hover,
    &:active {
      background: ${THEME.HOVER_PRIMARY};
      border-color: ${THEME.HOVER_PRIMARY};
      color: ${THEME.TEXT_SECONDARY};
      text-decoration: none;
    }
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const TweetButton = props => {
  const tweet = `“${props.articleTitle}” by Sean McPherson (@_seanmcp)  ̶ ${
    props.articleHref
  }`
  const href = `https://twitter.com/intent/tweet?text=${tweet}`
  return (
    <StyledA href={href} target="_blank">
      <StyledIcon icon={'Twitter'} />
      <span>Share</span>
    </StyledA>
  )
}

TweetButton.propTypes = {
  articleHref: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired
}

export default TweetButton
