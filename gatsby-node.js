const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/index.js')
    resolve(
      graphql(
        `
          {
            allContentfulProject {
              edges {
                node {
                  title
                  slug
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

        const posts = result.data.allContentfulProject.edges
        posts.forEach((post, i) => {
          createPage({
            path: `/post/${post.node.slug}/`,
            component: postTemplate,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}