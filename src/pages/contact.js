import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import ContactForm from '../components/contact/ContactForm'
import Layout from '../components/Layout'
import PageHeader from '../components/common/PageHeader'

const Contact = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')
  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`Contact - ${siteTitle}`}
      />
      <PageHeader heading="Contact">
        <p>
          Do you have an excited job opportunity for me?{' '}
          <a
            href="https://seanmcp.github.io/areyoulookingforwork"
            target="_blank"
          >
            Check my availability here
          </a>
          . You can also find my contact details on{' '}
          <a href="https://linkedin.com/in/seanmcp" target="_blank">
            LinkedIn
          </a>
          .
        </p>
      </PageHeader>
      <ContactForm />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
