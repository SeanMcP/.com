import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import PostDate from './PostDate'
import CategoryLink from '../common/CategoryLink'
import TagLinks from '../common/TagLinks'
import TweetButton from './TweetButton'

import THEME from '../../styles/theme'

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;

  > *:not(:last-child) {
    margin-right: 2rem;
  }

  @media screen and (max-width: ${THEME.SIZE_MOBILE}) {
    align-items: flex-start;
    flex-direction: column;

    > *:not(:last-child) {
      margin: 0 0 1rem;
    }
  }
`

const PostFooter = ({ articleHref, articleTitle, category, date, tags }) => (
  <StyledFooter>
    {date && <PostDate date={date} />}
    {category && <CategoryLink category={category} />}
    <TagLinks tags={tags} />
    {articleHref && articleTitle && (
      <TweetButton articleHref={articleHref} articleTitle={articleTitle} />
    )}
  </StyledFooter>
)

PostFooter.propTypes = {
  articleHref: PropTypes.string,
  articleTitle: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default PostFooter
