import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles/input.module.css'

const TextInput = ({ type, id, name, stretch, label, ...inputProps }) => (
  <div className={styles.container} style={{ alignItems: stretch ? 'unset' : 'flex-start' }}>
    {label && <label className={styles.inputLabel} htmlFor={id}>{label}</label>}
    <input id={id} name={name} className={styles.inputText} type={type} {...inputProps} />
  </div>
)

TextInput.defaultProps = {
  type: 'text'
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text',
    'email',
    'password',
    'tel',
    'url',
    'search',
    'number'
  ])
}

export default TextInput
