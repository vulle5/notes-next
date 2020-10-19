import React from 'react'
import { render } from '@testing-library/react'

import Modal from '../modal'

describe('Modal component', () => {
  const component = (
    <Modal
      isOpen
      ariaHideApp={false}
    >
      <div>Some content</div>
    </Modal>
  )

  beforeEach(() => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', '__next')
    document.body.appendChild(modalRoot)
  })

  test('should render correctly', () => {
    const { getByRole } = render(component)
    expect(getByRole('dialog')).toMatchSnapshot()
  })
})
