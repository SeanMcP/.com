import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import kebabCase from 'lodash/kebabCase'

import Layout from '../components/Layout'
import PostPreview from '../components/post/PostPreview'
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
      <PageHeader>
        <h1>{series}</h1>
        <p>
          {copy[seriesKey]
            ? copy[seriesKey]
            : `All the articles in the ${series} series`}
          .
        </p>
      </PageHeader>
      {posts.map(({ node }) => (
        <PostPreview
          key={node.fields.slug}
          category={node.frontmatter.category}
          summary={node.excerpt}
          date={node.frontmatter.date}
          slug={node.fields.slug}
          time={node.timeToRead}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          update={node.frontmatter.update}
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
            update(formatString: "MMM. D, YYYY")
          }
          timeToRead
        }
      }
    }
  }
`
