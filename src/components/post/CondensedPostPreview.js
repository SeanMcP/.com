import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import CategoryLink from '../common/CategoryLink'
import PostDate from './PostDate'

const StyledArticle = styled.article`
  h3 {
    margin-bottom: 0.5rem;
  }

  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

const StyledDiv = styled.div`
  > div {
    display: inline;
  }
`

const PostPreview = props => (
  <StyledArticle>
    <h3>
      <Link to={`articles/${props.slug}`}>{props.title}</Link>
    </h3>
    <StyledDiv>
      <PostDate date={props.date} hideIcon /> | {`${props.time} min read`} |{' '}
      <CategoryLink category={props.category} hideIcon />
    </StyledDiv>
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
