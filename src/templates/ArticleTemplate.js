import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components/macro'
import get from 'lodash/get'

import Layout from '../components/Layout'
import PostBio from '../components/post/PostBio'
import ArticleDate from '../components/post/ArticleDate'
import PostHelmet from '../components/post/PostHelmet'

import ArticleStyles from '../styles/components/ArticleTemplate.styles'
import ContentContainer from '../components/ContentContainer'
import CategoryLink from '../components/common/CategoryLink'
import PageHeader from '../components/common/PageHeader'
import Share from '../components/post/Share'

const StyledPostMetaDiv = styled.div`
  > * {
    display: inline;
  }
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
          <hr />
          <Share title={post.frontmatter.title} url={location.href} />
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
