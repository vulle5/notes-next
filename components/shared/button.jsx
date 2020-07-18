import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/button.module.css'

const Button = ({ text, ...buttonProps }) => (
  <button className={styles.filled} type="button" {...buttonProps}>{text}</button>
)

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button
