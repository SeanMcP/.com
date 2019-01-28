import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import PostPreview from '../components/post/PostPreview'
import SearchHeader from '../components/common/SearchHeader'

const TagTemplate = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges', [])
  const { tag } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet title={`Tags | ${siteTitle}`} />
      <SearchHeader queryKey={'Tag'} queryValue={tag} />
      {posts.map(({ node }) => (
        <PostPreview
          key={node.fields.slug}
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          summary={node.frontmatter.summary}
          time={node.timeToRead}
          title={get(node, 'frontmatter.title') || node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default TagTemplate

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] }, published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            category
            date(formatString: "MMMM D, YYYY")
            summary
            tags
            title
          }
          timeToRead
        }
      }
    }
  }
`
