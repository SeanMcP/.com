import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash/get'

import CategoryIconLink from '../components/common/CategoryIconLink'
import Layout from '../components/Layout'
import PostBio from '../components/post/PostBio'
import PostDate from '../components/post/PostDate'
import PostFooter from '../components/post/PostFooter'
import PostHelmet from '../components/post/PostHelmet'
import PostTime from '../components/post/PostTime'

import PostStyles from '../styles/components/PostTemplate.styles'

const StyledPostMetaDiv = styled.div`
  > * {
    display: inline;
  }
`

const StyledPostHeaderDiv = styled.div`
  border-bottom: 1px solid ${p => p.theme.secondary};
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  margin: 1rem 0 2rem;
  padding-bottom: 2rem;
  text-align: center;

  img {
    width: 6rem;
  }
`

const StyledH1 = styled.h1`
  margin: 0;
`

const PostTemplate = props => {
  const { location } = props
  const post = props.data.markdownRemark
  const postDescription = post.frontmatter.summary || post.excerpt
  const postTitle = post.frontmatter.title
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={location} title={siteTitle}>
      <PostStyles />
      <PostHelmet
        postDescription={postDescription}
        postTitle={postTitle}
        siteTitle={siteTitle}
      />
      <article className="PostTemplate">
        <StyledPostHeaderDiv>
          <CategoryIconLink category={post.frontmatter.category} rounded />
          <StyledH1>{postTitle}</StyledH1>
          <StyledPostMetaDiv>
            <PostDate
              date={post.frontmatter.update || post.frontmatter.date}
              hideIcon
            />{' '}
            | <PostTime time={post.timeToRead} hideIcon />
          </StyledPostMetaDiv>
        </StyledPostHeaderDiv>
        <div
          className="typography"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
        <PostFooter
          articleHref={location.href}
          articleTitle={post.frontmatter.title}
          tags={post.frontmatter.tags}
          category={post.frontmatter.category}
          series={post.frontmatter.series}
        />
        <hr />
        <PostBio />
      </article>
    </Layout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        category
        date(formatString: "MMM. D, YYYY")
        series
        summary
        tags
        title
        update(formatString: "MMM. D, YYYY")
      }
      timeToRead
    }
  }
`
