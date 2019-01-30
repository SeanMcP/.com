import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Introduction } from '../components/text/Text'
import Layout from '../components/Layout'
import PostPreview from '../components/post/PostPreview'

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
        <PostPreview
          key={node.fields.slug}
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          summary={node.frontmatter.summary}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          time={node.timeToRead}
        />
      ))}
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
      limit: 3
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM D, YYYY")
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
