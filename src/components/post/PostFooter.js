import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CategoryLink from '../common/CategoryLink'
import SeriesLink from '../common/SeriesLink'
import TweetButton from './TweetButton'

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;

  > *:not(:last-child) {
    margin-right: 2rem;
  }

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    align-items: flex-start;
    flex-direction: column;

    > *:not(:last-child) {
      margin: 0 0 1rem;
    }
  }
`

const PostFooter = ({ articleHref, articleTitle, category, series, tags }) => (
  <StyledFooter>
    <CategoryLink category={category} />
    {series && <SeriesLink series={series} />}
    {articleHref && articleTitle && (
      <TweetButton articleHref={articleHref} articleTitle={articleTitle} />
    )}
  </StyledFooter>
)

PostFooter.propTypes = {
  articleHref: PropTypes.string,
  articleTitle: PropTypes.string,
  category: PropTypes.string,
  series: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default PostFooter
