import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Introduction } from '../components/text/Text'
import Layout from '../components/Layout'
import PageHeader from '../components/common/PageHeader'
import CondensedPostPreview from '../components/post/CondensedPostPreview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <PageHeader>
          <h1>Hello there!</h1>
        </PageHeader>
        <Introduction />
        <h2>Recent articles</h2>
        <hr className="--short" />
        {posts.map(({ node }) => (
          <CondensedPostPreview
            key={node.fields.slug}
            category={node.frontmatter.category}
            date={node.frontmatter.date}
            slug={node.fields.slug}
            title={get(node, 'frontmatter.title') || node.fields.slug}
            time={node.timeToRead}
          />
        ))}
      </Layout>
    )
  }
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
