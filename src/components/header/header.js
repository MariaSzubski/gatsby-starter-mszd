import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"

// import { colors, screen } from "../global/vars"

const Component = props => (
  <header>
    <div>
      <h1>
        {props.siteTitle}
      </h1>
    </div>
  </header>
)

Component.propTypes = {
  siteTitle: PropTypes.string,
}

Component.defaultProps = {
  siteTitle: ``,
}

export default Component
