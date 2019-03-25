import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet
      title={data.site.siteMetadata.title}
      meta={[
      {name: 'description', content: 'My blazing-fast website'},
      {name: 'keywords', content: 'write, keywords,here'},
    ]}
>
    <html lang="en" />
    </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1000,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
