import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import CategoryLink from '../common/CategoryLink'
import PostDate from './PostDate'
import PostTime from './PostTime'

const StyledArticle = styled.article`
  h3 {
    margin-bottom: 0.5rem;
  }

  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

const StyledDiv = styled.div`
  font-size: 0.8rem;
  > div {
    display: inline;
  }
`

const PostPreview = props => (
  <StyledArticle>
    <h3>
      <Link to={props.slug}>{props.title}</Link>
    </h3>
    <StyledDiv>
      <PostDate date={props.date} hideIcon /> |{' '}
      <PostTime time={props.time} hideIcon /> |{' '}
      <CategoryLink category={props.category} hideIcon />
    </StyledDiv>
    {props.summary && <p>{props.summary}</p>}
  </StyledArticle>
)

PostPreview.propTypes = {
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default PostPreview
