import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components/macro'
import get from 'lodash/get'

import CategoryIconLink from '../components/common/CategoryIconLink'
import Layout from '../components/Layout'
import PostBio from '../components/post/PostBio'
import ArticleDate from '../components/post/ArticleDate'
import PostFooter from '../components/post/PostFooter'
import PostHelmet from '../components/post/PostHelmet'
import PostTime from '../components/post/PostTime'

import ArticleStyles from '../styles/components/ArticleTemplate.styles'
import ContentContainer from '../components/ContentContainer'
import CategoryLink from '../components/common/CategoryLink'
import PageHeader from '../components/common/PageHeader'
import TweetButton from '../components/post/TweetButton'

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

const StyledH2 = styled.h2`
  margin: 0;
`

const ArticleTemplate = props => {
  const { location } = props
  const post = props.data.markdownRemark
  const postDescription = post.frontmatter.summary || post.excerpt
  const postTitle = post.frontmatter.title
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Layout location={location} title={siteTitle} freeform>
      <ArticleStyles />
      <PostHelmet
        postDescription={postDescription}
        postTitle={postTitle}
        siteTitle={siteTitle}
      />
      <article className="ArticleTemplate">
        <ContentContainer>
          <PageHeader heading={postTitle} centered>
            <StyledPostMetaDiv>
              <ArticleDate
                date={post.frontmatter.update || post.frontmatter.date}
              />
              {' in '}
              <CategoryLink category={post.frontmatter.category} /> (
              {post.timeToRead} min read)
            </StyledPostMetaDiv>
          </PageHeader>
          <div
            className="typography"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          {/* <hr />
          <PostFooter
            articleHref={location.href}
            articleTitle={post.frontmatter.title}
            tags={post.frontmatter.tags}
            category={post.frontmatter.category}
            series={post.frontmatter.series}
          /> */}
          <hr />
          <TweetButton
            articleHref={location.href}
            articleTitle={post.frontmatter.title}
          />
          <hr />
          <PostBio />
        </ContentContainer>
      </article>
    </Layout>
  )
}

export default ArticleTemplate

export const pageQuery = graphql`
  query BlogSinglePostBySlug($slug: String!) {
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
