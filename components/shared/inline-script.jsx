// Script by: https://github.com/xiaokaike

// Use this component to add script tags with inline js to document header
import React from 'react'
import PropTypes from 'prop-types'

const InlineScript = ({ children }) => (
  // eslint-disable-next-line react/no-danger
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} />
)

InlineScript.propTypes = {
  children: PropTypes.node.isRequired
}

export default InlineScript
