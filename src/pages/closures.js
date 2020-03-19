import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Posts from '../components/posts'

export const query = graphql`
  query Closures {
    mdx(frontmatter: { name: { eq: "closures" } } ) {
      frontmatter {
        name
        title
      }
    }

    allMdx(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        fields: {contentType: { eq: "closures" }},
      },
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
          excerpt
        }
      }
    }
  }
`

const Closures = props => {
  const {
    frontmatter
  } = props.data.mdx

  return (
    <Layout location={props.location} title={frontmatter.title}>
      <main>
        <p>
          <a href={`https://docs.google.com/spreadsheets/d/16g95WUiwiKZtd2a4fvR268E655Sa0n5qY0hMu0Y8Mhw/edit?usp=sharing`}>Here is a list</a> of restaurant changes due to coronavirus.
        </p>
        <p>
          Enter the status of a restaurant <a href={`https://docs.google.com/forms/d/e/1FAIpQLSfrBhGiTU9czsPqLhF-UgsBOuPPIfL_DkRtgPexAaPFGD6jgQ/viewform?usp=sf_link`}>here</a>
        </p>
        <Posts edges={props.data.allMdx.edges} />
      </main>
    </Layout>
  )
}

export default Closures
