import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Icon = ({ className, name, ...iconProps }) => (
  <FontAwesomeIcon className={className} icon={icons[name]} {...iconProps} />
)

const icons = {
  'times-circle': faTimesCircle
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired
}

export default Icon
