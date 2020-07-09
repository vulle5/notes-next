import React from 'react'

import styles from './styles/container.module.css'

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
)

export default Container
