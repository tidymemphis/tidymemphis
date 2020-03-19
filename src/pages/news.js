import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Posts from '../components/posts'

export const query = graphql`
  query NewsPage {
    mdx(frontmatter: { name: { eq: "news" } } ) {
      frontmatter {
        name
        title
      }
    }

    allMdx(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        fields: {contentType: { eq: "news" }},
      },
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`

const NewsPage = props => {
  const {
    frontmatter
  } = props.data.mdx

  return (
    <Layout location={props.location} title={frontmatter.title}>
      <main>
        <Posts edges={props.data.allMdx.edges} />
      </main>
    </Layout>
  )
}

export default NewsPage
