import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/button.module.css'

const Button = ({ children, stretch, variant, ...buttonProps }) => (
  <button
    className={styles[variant]}
    style={{ width: stretch ? '100%' : 'auto' }}
    type="button"
    {...buttonProps}
  >
    <div className="buttonContent">
      {children}
    </div>
    <style jsx>{`
      .buttonContent {
        display: inline-flex;
      }
    `}
    </style>
  </button>
)

Button.defaultProps = {
  variant: 'filled'
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  stretch: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined'])
}

export default Button
