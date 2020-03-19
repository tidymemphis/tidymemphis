import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Markdown from '../components/markdown'

export const query = graphql`
  query NewsPost($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        contentType
      }
      frontmatter {
        title
        description
      }
      body
    }
  }
`

const NewsPost = (props) => {
  const {
    frontmatter,
    body
} = props.data.mdx

  return (
    <Layout title={frontmatter.title}>
      <main className='post'>
        <Markdown post={body} />
      </main>
    </Layout>
  )
}

export default NewsPost
