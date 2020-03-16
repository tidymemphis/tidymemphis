import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Help Memphis Service Workers"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `memphis`]}
        />
        <p>The service industry is built around gatherings. </p>
        <p>That's why this industry has been, and will be, hit hard by the coronavirus. </p>
        <p>We agree that drastic measures must be taken to stop the spread of the virus,
        including closing bars and restaurants.</p>

        <p>tidymemphis is a union of service industry workers determined to help during this pandemic.</p>
        <p>We offer indoor and outdoor cleaning services throughout Shelby County,
        and are committed to making our community healthier.</p>
        <p>By hiring our union, you are supporting workers temporarily displaced by this virus.</p>
        <p>You can also donate to our union,
        and all proceeds will be used to help pay the bills of service industry workers and establishments.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Learn More</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
