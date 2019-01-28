import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import CondensedPostPreview from '../components/post/CondensedPostPreview'
import SearchHeader from '../components/common/SearchHeader'

const CategoryTemplate = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges', [])
  const { category } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet title={`Categories | ${siteTitle}`} />
      <SearchHeader queryKey={'Category'} queryValue={category} />
      {posts.map(({ node }) => (
        <CondensedPostPreview
          key={node.fields.slug}
          category={node.frontmatter.category}
          summary={node.frontmatter.summary}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          time={node.timeToRead}
          title={get(node, 'frontmatter.title') || node.fields.slug}
        />
      ))}
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query BlogPostsByCategory($category: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { category: { eq: $category }, published: { eq: true } }
      }
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
