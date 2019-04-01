import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components/macro'

import { Introduction } from '../components/text/Text'
import Layout from '../components/Layout'
import ArticlePreview from '../components/post/ArticlePreview'
import Projects from '../components/home/Projects'
import Icon from '../components/common/Icon'

const StyledP = styled.p`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-top: 2rem;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

const BlogIndex = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')
  const posts = get(props, 'data.allMarkdownRemark.edges')

  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Introduction />
      <h2>Recent articles</h2>
      <hr className="--short" />
      {posts.map(({ node }) => (
        <ArticlePreview key={node.fields.slug} {...node} />
      ))}
      <StyledP>
        <StyledIcon icon="Rss" />
        <a href="./rss.xml">Subscribe to the blog (RSS)</a>
      </StyledP>
      <Projects />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMM. D, YYYY")
            update(formatString: "MMM. D, YYYY")
            category
            summary
            tags
            title
          }
        }
      }
    }
  }
`
