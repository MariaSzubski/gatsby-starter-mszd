import React from "react"
import PropTypes from "prop-types"

const Component = props => (
  <div style={{backgroundColor: props.backgroundColor}}>This is a sample comp</div>
)

Component.propTypes = {
  backgroundColor: PropTypes.string
}

Component.defaultProps = {
  backgroundColor: "pink"
}

export default Component
