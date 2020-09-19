import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/card.module.css'

const Card = ({ children, containerStyles }) => (
  <div className={styles.container} style={containerStyles}>
    {children}
  </div>
)

Card.propTypes = {
  containerStyles: PropTypes.shape({}),
  children: PropTypes.node
}

export default Card
