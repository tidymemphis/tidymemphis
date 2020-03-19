import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Memphis Service Industry & COVID-19"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `memphis`, `service industry`, `servers`, `restaurants`]}
        />

        Send money directly to employees at your favorite restaurants:
        <p><span role="img" aria-label="money-bag">💰 </span><a href={`https://docs.google.com/spreadsheets/d/1ToAhSOm0SN7u0blufJVNU8i-Tf24zGz5LHg8ClfnCk8/edit?usp=sharing`}>
          <b>Memphis Virtual Tip Jar</b>
        </a><span role="img" aria-label="money-bag"> 💰</span></p>

        <b><span role="img" aria-label="chef">👩‍🍳</span> Service industry employees <span role="img" aria-label="chef">👩‍🍳</span></b>

        <p>To file for funemployment, go <a href={`https://www.jobs4tn.gov/`}>here</a>, click <b>Unemployment Benefits</b>, then <b>File a Claim</b> to see if you are eligible for unemployment benefits. You are able to file immediately after you lose your job. </p>

        <p>Fill out <a href={`https://docs.google.com/forms/d/e/1FAIpQLSd50axYGcCPOn5NRE_gw52n36hgJDLw5vhDCDDOClAILkB_eg/viewform?usp=sf_link`}>this form</a> to be added to the tip jar
         <span role="img" aria-label="money-bag"> 💰</span></p>

        <p><span role="img" aria-label="burger">🍔 </span><b>Restaurant changes/closings:</b><span role="img" aria-label="burger"> 🍔</span>
        <p><a href={`https://docs.google.com/spreadsheets/d/16g95WUiwiKZtd2a4fvR268E655Sa0n5qY0hMu0Y8Mhw/edit?usp=sharing`}>
          Here is a list</a> of restaurant changes due to coronavirus.</p></p>

        <p>Enter the status of a restaurant <a href={`https://docs.google.com/forms/d/e/1FAIpQLSfrBhGiTU9czsPqLhF-UgsBOuPPIfL_DkRtgPexAaPFGD6jgQ/viewform?usp=sf_link`}>here</a></p>



        <p>
        <span role="img" aria-label="revolving-hearts">💞 </span><b>Other ways to help:</b> <span role="img" aria-label="revolving-hearts"> 💞</span>
        <p><a href={`https://www.gofundme.com/f/memphisfoodworkers`}>
          Memphis Food Industry Emergency Worker Assistance
        </a><p>
         gofundme by Edible Memphis
        </p></p></p>


      </Layout>
    )
  }
}

export default IndexPage
