import React from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const Home = ({ location }) => (
  <Layout location={{ location }}>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>
      <span role="img" aria-label="wave hello">
        👋
      </span>{' '}
      Create a file @{' '}
      <code style={{ background: '#f2f2f2' }}>
        ./src/gatsby-theme-publisher/templates/home/index.js
      </code>{' '}
      to override (shadow) this template.
    </p>
    <p>
      Learn more about{' '}
      <a href="https://www.gatsbyjs.org/docs/theme-api/#shadowing">
        component shadowing
      </a>
      .
    </p>
  </Layout>
)

export default Home
