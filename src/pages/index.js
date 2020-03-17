import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Help Memphis Service Industry Workers"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `memphis`, `service industry`, `servers`, `restaurants`]}
        />

        <p>This website will be dedicated to helping Memphians affected by the coronavirus.</p>
        <p><a href={`https://docs.google.com/spreadsheets/d/1ToAhSOm0SN7u0blufJVNU8i-Tf24zGz5LHg8ClfnCk8/edit?usp=sharing`}>
          Memphis Virtual Tip Jar
        </a></p>
        <p><a href={`https://docs.google.com/forms/d/e/1FAIpQLSd50axYGcCPOn5NRE_gw52n36hgJDLw5vhDCDDOClAILkB_eg/viewform?usp=sf_link`}>
          Get added to the list.
          </a></p>

      </Layout>
    )
  }
}

export default IndexPage
