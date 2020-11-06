import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'

const WithProviders = ({ children }) => (
  <RecoilRoot>
    {children}
  </RecoilRoot>
)

const customRender = (ui, options) => render(ui, { wrapper: WithProviders, ...options })

WithProviders.propTypes = {
  children: PropTypes.node
}

// re-export everything
export * from '@testing-library/react'
export { customRender as render }
