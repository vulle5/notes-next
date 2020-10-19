import React from 'react'
import { render } from 'testing/testing-library-wrapper'
import * as nextRouter from 'next/router'

import IndexModal from '../index-modal'

beforeEach(() => {
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', '__next')
  document.body.appendChild(modalRoot)
})

const mockUseRouter = returnValue => {
  nextRouter.useRouter = jest.fn().mockImplementation(() => returnValue)
}

test('should render correctly', () => {
  mockUseRouter({ query: {} })
  render(<IndexModal />)
  expect(document.body).toMatchSnapshot()
})

test('should render modal when noteId in query', () => {
  mockUseRouter({ query: { noteId: 'some-id' } })
  const { getByRole } = render(<IndexModal />)
  expect(getByRole('dialog')).toMatchSnapshot()
})
