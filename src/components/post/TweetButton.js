import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../common/Icon'

const StyledA = styled.a`
  align-items: center;
  display: flex;
  margin-left: auto;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    border: 2px solid ${p => p.theme.primary_dark};
    border-radius: 5rem;
    margin-right: auto;
    margin-top: 1rem;
    padding: 1rem 2rem;
    transition: all 100ms ease-in-out;

    &:hover,
    &:active {
      background: ${p => p.theme.primary};
      border-color: ${p => p.theme.primary};
      color: white;
      text-decoration: none;
    }
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const TweetButton = ({ articleHref, articleTitle }) => {
  const tweet = `“${articleTitle}” by @_seanmcp  ̶ ${articleHref}`
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
