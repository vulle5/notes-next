import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/button.module.css'

const Button = ({ children, ...buttonProps }) => (
  <button className={styles.filled} type="button" {...buttonProps}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
