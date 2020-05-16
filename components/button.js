import React from "react";
import PropTypes from 'prop-types';

import styles from './styles/button.module.css'

export default function Button({ text }) {
  return (
    <button className={styles.filled}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
