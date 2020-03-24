import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from '../components/posts'

export const query = graphql`
  query IndexPage {

    site {
      siteMetadata {
        title
      }
    }

    news: allMdx(
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
            description
          }
          excerpt
        }
      }
    },

    resources: allMdx(
      sort: { order: DESC, fields: [frontmatter___date]},
      filter: {
        fields: {contentType: { eq: "resources" }},
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
    },


    closures: allMdx(
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

class IndexPage extends React.Component {
  render() {

    const siteTitle = "Memphis & COVID-19"

    const news = this.props.data.news.edges
    const resources = this.props.data.resources.edges
    const closures = this.props.data.closures.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `memphis`, `service industry`, `servers`, `restaurants`, `tidymemphis`]}
        />
        <main>

          {resources.length > 0 ?
            <section>
              <h2>Resources: </h2>
              <Posts edges={resources.slice(0, 4)} />
              <Link to='/resources'>See All Resources</Link>
            </section>
          : null}

          {news.length > 0 ?
            <section>
              <h2>News: </h2>
              <Posts edges={news.slice(0, 4)} />
              <Link to='/news'>See All News</Link>
            </section>
          : null}

          {closures.length > 0 ?
            <section>
              <h2>Closures: </h2>
              <Posts edges={closures.slice(0, 4)} />
              <Link to='/closures'>See All Closures</Link>
            </section>
          : null}

        </main>
      </Layout>
    )
  }
}

export default IndexPage
