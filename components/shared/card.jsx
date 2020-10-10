import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/card.module.css'

const Card = ({ children, containerStyles, shadow }) => (
  <div className={styles[`shadow-${shadow}`]} style={containerStyles}>
    {children}
  </div>
)

Card.defaultProps = {
  shadow: 'large'
}

Card.propTypes = {
  containerStyles: PropTypes.shape({}),
  children: PropTypes.node,
  shadow: PropTypes.oneOf(['small', 'large', 'none'])
}

export default Card
