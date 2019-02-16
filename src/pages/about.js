import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'

import Layout from '../components/Layout'
import PageHeader from '../components/common/PageHeader'

import * as Styled from '../styles/about.styled'

const AboutPage = ({ data, location }) => {
  const siteTitle = get(data, 'site.siteMetadata.title')
  const siteDescription = get(data, 'site.siteMetadata.description')
  return (
    <Layout location={location} title={siteTitle}>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={`About - ${siteTitle}`}
      />
      <PageHeader>
        <h1>About</h1>
        <p>
          An educator turned software developer with a love for helping people
        </p>
      </PageHeader>
      <Styled.Img
        src={require('../assets/seanmcp-headshot-2017.jpg')}
        alt="A photo of my smiling face as I stand in in a blue gingham button down shirt front of an austere brick wall."
      />{' '}
      <p>
        Born and raised in State College, Pennsylvania, I graduated from
        Edinboro University with a degree in Middle-level Education. After
        working for three years as a teacher in Pennsylvania and Georgia, I
        decided to switch careers.
      </p>
      <p>
        I enrolled in The Iron Yard, a coding bootcamp in Atlanta, and—after a
        four-month whirlwind—graduated with a certificate in Front-end
        Engineering with React. In God's providence, I was given a software
        developer position at TSYS Digital Innovation and haven't looked back
        since.
      </p>
      <p>
        When I'm not coding at work and at home, I enjoy spending time with my
        wife (married '14), son (born '18), and three-legged dog (adopted '17).
        We like to play board games and would love{' '}
        <a href="https://twitter.com/_seanmcp">to hear your recommendations</a>.
      </p>
      <p>
        I also like soccer a little too much, but that's a topic for another
        page.
      </p>
    </Layout>
  )
}

export default AboutPage

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
