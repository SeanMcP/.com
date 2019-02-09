import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import PostDate from './PostDate'
import PostTime from './PostTime'

const StyledArticle = styled.article`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 4rem;

  :not(:last-of-type) {
    margin-bottom: 2rem;
  }
`

const StyledH3 = styled.h3`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  margin: 0;
`

const StyledImg = styled.img`
  border-radius: 0.5rem;
  grid-column: 2 / span 1;
  grid-row: 1 / span 2;
  width: 100%;
`

const StyledDiv = styled.div`
  grid: 2 / span 1 / 1 / span 1;
  > div {
    display: inline;
  }
`

const StyledP = styled.p`
  grid: 3 / span 1 / 1 / span 1;
  margin: 0;
`

const PostPreview = props => (
  <StyledArticle>
    <StyledH3>
      <Link to={props.slug}> {props.title} </Link>{' '}
    </StyledH3>{' '}
    <StyledImg
      src={require(`../../assets/icons/${props.category}.png`)}
      alt={props.category}
    />{' '}
    <StyledDiv>
      <PostDate date={props.date} hideIcon /> |{' '}
      <PostTime time={props.time} hideIcon />
    </StyledDiv>{' '}
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
