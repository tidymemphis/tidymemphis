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

        Send money directly to employees at your favorite restaurants:
        <p><a href={`https://docs.google.com/spreadsheets/d/1ToAhSOm0SN7u0blufJVNU8i-Tf24zGz5LHg8ClfnCk8/edit?usp=sharing`}>
          <b>Memphis Virtual Tip Jar</b>
        </a></p>
        Service industry employees: <p><a href={`https://docs.google.com/forms/d/e/1FAIpQLSd50axYGcCPOn5NRE_gw52n36hgJDLw5vhDCDDOClAILkB_eg/viewform?usp=sf_link`}>
          fill out this form to be added to the tip jar
        </a></p>

        <p><a href={`https://docs.google.com/spreadsheets/d/16g95WUiwiKZtd2a4fvR268E655Sa0n5qY0hMu0Y8Mhw/edit?usp=sharing`}>
          Click here </a>for a list of restaurant changes due to coronavirus.</p>

        <p>Enter the status of a restaurant <a href={`https://docs.google.com/forms/d/e/1FAIpQLSfrBhGiTU9czsPqLhF-UgsBOuPPIfL_DkRtgPexAaPFGD6jgQ/viewform?usp=sf_link`}>here</a></p>



        <p>
        <b>Other ways to help:</b>
        </p>

        <a href={`https://www.gofundme.com/f/memphisfoodworkers`}>
          Memphis Food Industry Emergency Worker Assistance
        </a><p>
         gofundme by Edible Memphis
        </p>


      </Layout>
    )
  }
}

export default IndexPage
