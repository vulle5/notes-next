import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/button.module.css'

const Button = ({ children, stretch, style, variant, ...buttonProps }) => (
  <button
    className={styles[variant]}
    style={{ ...style, width: stretch ? '100%' : 'auto' }}
    type="button"
    {...buttonProps}
  >
    <div className={styles.buttonContent}>
      {children}
    </div>
  </button>
)

Button.defaultProps = {
  variant: 'filled'
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  stretch: PropTypes.bool,
  style: PropTypes.shape({}),
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

export default Button
