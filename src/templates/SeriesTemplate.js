import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/Layout'
import ArticlePreview from '../components/post/ArticlePreview'
import PageHeader from '../components/common/PageHeader'

const copy = {
  'js-basics':
    'Exploring the fundamentals of JavaScript for learners of all ages and experience levels'
}

const SeriesTemplate = props => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const posts = get(props, 'data.allMarkdownRemark.edges', [])
  const { series } = props.pageContext
  const seriesKey = kebabCase(series.toLowerCase())
  return (
    <Layout location={props.location} title={siteTitle}>
      <Helmet title={`${series} series | ${siteTitle}`} />
      <PageHeader heading={series}>
        <p>
          {copy[seriesKey]
            ? copy[seriesKey]
            : `All the articles in the ${series} series`}
          .
        </p>
      </PageHeader>
      {posts.map(({ node }) => (
        <ArticlePreview key={node.fields.slug} {...node} />
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
            update(formatString: "MMM. D, YYYY")
          }
          timeToRead
        }
      }
    }
  }
`
