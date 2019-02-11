import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import CategoryIconLink from '../common/CategoryIconLink'
import PostDate from './PostDate'
import PostTime from './PostTime'

const StyledArticle = styled.article`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 4rem;

  :not(:last-of-type) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    grid-template-columns: 1fr 2rem;
  }
`

const StyledH3 = styled.h3`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  margin: 0;
`

const StyledIconContainerDiv = styled.div`
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
`

const StyledPostMetaDiv = styled.div`
  font-size: 90%;
  grid-column: 1 / span 1;
  grid-row: 2 / span 1;
  > div {
    display: inline;
  }
`

const StyledP = styled.p`
  grid-column: 1 / span 1;
  grid-row: 3 / span 1;
  margin: 0;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    grid-column-end: span 2;
  }
`

const PostPreview = props => (
  <StyledArticle>
    <StyledH3>
      <Link to={props.slug}> {props.title} </Link>{' '}
    </StyledH3>{' '}
    <StyledIconContainerDiv>
      <CategoryIconLink category={props.category} rounded />
    </StyledIconContainerDiv>
    <StyledPostMetaDiv>
      <PostDate date={props.date} hideIcon /> |{' '}
      <PostTime time={props.time} hideIcon />
    </StyledPostMetaDiv>{' '}
    {props.summary && <StyledP> {props.summary} </StyledP>}{' '}
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
