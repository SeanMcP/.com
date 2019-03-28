const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const ArticleTemplate = path.resolve('./src/templates/ArticleTemplate.js')
    const CategoryTemplate = path.resolve('./src/templates/CategoryTemplate.js')
    const SeriesTemplate = path.resolve('./src/templates/SeriesTemplate.js')
    // const TagTemplate = path.resolve('./src/templates/TagTemplate.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    category
                    tags
                    series
                    title
                    published
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        // // Tag pages:
        // let tags = []
        // // Iterate through each post, putting all found tags into `tags`
        // _.each(posts, edge => {
        //   if (_.get(edge, 'node.frontmatter.published') && _.get(edge, 'node.frontmatter.tags')) {
        //     tags = tags.concat(edge.node.frontmatter.tags)
        //   }
        // })
        // // Eliminate duplicate tags
        // tags = _.uniq(tags)

        // // Make tag pages
        // tags.forEach(tag => {
        //   createPage({
        //     path: `/tags/${_.kebabCase(tag)}/`,
        //     component: TagTemplate,
        //     context: {
        //       tag
        //     }
        //   })
        // })

        // Series
        let series = []
        _.each(posts, edge => {
          if (
            _.get(edge, 'node.frontmatter.published') &&
            _.get(edge, 'node.frontmatter.series')
          ) {
            series.push(edge.node.frontmatter.series)
          }
        })
        series = _.uniq(series)

        // Create series pages
        series.forEach(series => {
          createPage({
            path: `/series/${_.kebabCase(series)}/`,
            component: SeriesTemplate,
            context: {
              series
            }
          })
        })

        // Category pages:
        let categories = []
        // Iterate through each post, putting all found categories into `categories`
        _.each(posts, edge => {
          if (
            _.get(edge, 'node.frontmatter.published') &&
            _.get(edge, 'node.frontmatter.category')
          ) {
            categories.push(edge.node.frontmatter.category)
          }
        })
        // Eliminate duplicate categories
        categories = _.uniq(categories)

        // Make category pages
        categories.forEach(category => {
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: CategoryTemplate,
            context: {
              category
            }
          })
        })

        _.each(posts, post => {
          if (post.node.frontmatter.published) {
            createPage({
              path: `${post.node.fields.slug.slice(1)}`,
              component: ArticleTemplate,
              context: {
                slug: post.node.fields.slug
              }
            })
          }
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode
    })
    createNodeField({
      name: `slug`,
      node,
      value
    })
  }
}
