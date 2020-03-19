const path = require('path')

function slugify(string) {
  return string.toString().toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')    // Remove all non-word chars
    .replace(/--+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '')         // Trim - from end of text
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  // block out content/pages since they have different frontmatter
  if (node.internal.type === 'Mdx' && !node.fileAbsolutePath.includes('content/pages/')) {
    let url = slugify(node.frontmatter.title)
    const directory = node.fileAbsolutePath.match(/([^/]+)\/[^/]+$/)[1]
    let template = directory

    const slug = `${directory}/${url}`

    createNodeField({
      node,
      name: 'id',
      value: node.id
    })

    createNodeField({
      node,
      name: 'contentType',
      value: directory
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'template',
      value: template
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/^((?!/pages/).)*$/" } } 
      ) {
        edges {
          node {
            id
            fields {
              slug
              template
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.template}.js`),
      context: {
        id: node.fields.id,
        contentType: node.fields.contentType,
        slug: node.fields.slug,
        template: node.fields.template
      }
    })
  })
}
