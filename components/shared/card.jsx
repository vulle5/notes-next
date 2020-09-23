import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/card.module.css'

const Card = ({ children, containerStyles, shadowSize }) => (
  <div className={styles[`shadow-${shadowSize}`]} style={containerStyles}>
    {children}
  </div>
)

Card.defaultProps = {
  shadowSize: 'large'
}

Card.propTypes = {
  containerStyles: PropTypes.shape({}),
  children: PropTypes.node,
  shadowSize: PropTypes.oneOf(['small', 'large'])
}

export default Card
