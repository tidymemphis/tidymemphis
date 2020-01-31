import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "welcome to a mess"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./bts-0.jpg" alt="Gatsby Scene" />
        <h1>
          not yet not yet{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>200131: I pulled an all-nighter and figured out how to get this site to say more than hello world</p>
        <p>I'm sarah, a 25 year old grad student pursuing my masters Urban Planning.</p>
        <p>last november, I began learning R and I thought it'd be a good idea to have a website to post my plots</p>
        <p>I had no programming experience but LOOK AT ME NOW.</p><p></p>
        <p>all this work so I could still use someone else's template, lol.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
