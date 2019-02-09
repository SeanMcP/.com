import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import PostPreview from '../components/post/PostPreview'
import SearchHeader from '../components/common/SearchHeader'

const SeriesTemplate = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges', [])
  const { series } = props.pageContext
  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet title={`Series | ${siteTitle}`} />
      <SearchHeader queryKey={'Series'} queryValue={series} />
      {posts.map(({ node }) => (
        <PostPreview
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

export default SeriesTemplate

export const pageQuery = graphql`
  query BlogPostsBySeries($series: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { series: { eq: $series }, published: { eq: true } }
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
            date(formatString: "MMM. D, YYYY")
            series
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
