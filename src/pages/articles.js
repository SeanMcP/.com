import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import ArticleCategories from '../components/common/ArticleCategories'
import Layout from '../components/Layout'
import PageHeader from '../components/common/PageHeader'
import PostPreview from '../components/post/PostPreview'

const Articles = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const siteDescription = get(props, 'data.site.siteMetadata.description')
  const posts = get(props, 'data.allMarkdownRemark.edges')
  const categories = get(props, 'data.allMarkdownRemark.group')

  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Articles - ${siteTitle}`}
      />
      <PageHeader>
        <h1>Articles</h1>
        {categories && (
          <ArticleCategories list={categories} navigate={props.navigate} />
        )}
      </PageHeader>
      {posts.map(({ node }) => (
        <PostPreview
          key={node.fields.slug}
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          summary={node.excerpt}
          time={node.timeToRead}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          update={node.frontmatter.update}
        />
      ))}
    </Layout>
  )
}

export default Articles

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
            summary
            tags
            title
            update(formatString: "MMM. D, YYYY")
          }
          timeToRead
        }
      }
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
