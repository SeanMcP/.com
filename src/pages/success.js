import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import PageHeader from '../components/common/PageHeader'
import PostPreview from '../components/post/ArticlePreview'

const SuccessPage = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')
  const posts = get(data, 'allMarkdownRemark.edges')

  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Success - ${siteTitle}`}
      />
      <PageHeader>
        <h1>Success</h1>
        <p>
          Thanks for reaching out! I'll get back to you as soon as possible. In
          the meantime, checkout some of the latest articles:
        </p>
      </PageHeader>
      {posts.map(({ node }) => (
        <PostPreview
          key={node.fields.slug}
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          summary={node.excerpt}
          tags={node.frontmatter.tags}
          time={node.timeToRead}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          update={node.frontmatter.update}
        />
      ))}
    </Layout>
  )
}

export default SuccessPage

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
          frontmatter {
            date(formatString: "MMM. D, YYYY")
            category
            summary
            tags
            title
            update(formatString: "MMM. D, YYYY")
          }
          timeToRead
        }
      }
    }
  }
`
