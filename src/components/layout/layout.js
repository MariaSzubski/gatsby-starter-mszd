import React from "react"
import PropTypes from "prop-types"

import GlobalStyles from "../global/styles"
import SEO from "./seo"

const Layout = ({ children, ...props }) => (
  <>
    <SEO title={props.title} />
    <GlobalStyles />
    <div>
      <main>{children}</main>
      <footer>© {new Date().getFullYear()} Maria Szubski Digital, LLC</footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

Layout.defaultProps = {}

export default Layout
