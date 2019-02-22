import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import CategoryIconLink from '../common/CategoryIconLink'
import PostDate from './PostDate'
import PostTime from './PostTime'

import * as Styled from './PostPreview.styled'

const PostPreview = props => (
  <Styled.Article>
    <CategoryIconLink category={props.category} rounded />
    <div>
      <Link to={props.slug}>
        <Styled.H3>{props.title}</Styled.H3>
      </Link>
      <Styled.MetaContainerDiv>
        <PostDate date={props.date} hideIcon /> |{' '}
        <PostTime time={props.time} hideIcon />
      </Styled.MetaContainerDiv>
      {props.summary && <Styled.SummaryP>{props.summary}</Styled.SummaryP>}
    </div>
  </Styled.Article>
)

PostPreview.propTypes = {
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}

export default PostPreview
