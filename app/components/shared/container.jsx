import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children }) => (
  <main className="container">
    {children}
    <style jsx>
      {`
      .container {
          padding: 0 1rem;
        }
      `}
    </style>
  </main>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
