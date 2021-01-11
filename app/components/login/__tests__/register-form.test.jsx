import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'

import authService from 'app/services/api/auth'
import userService from 'app/services/api/user'
import RegisterForm from '../register-form'

jest.mock('services/api/user')
jest.mock('services/api/auth')

const fillInputs = getByLabelText => {
  fireEvent.change(getByLabelText('Email address'), { selector: 'input', target: { value: 'asd@asd.com' } })
  fireEvent.change(getByLabelText('Password'), { selector: 'input', target: { value: 'secret' } })
  fireEvent.change(getByLabelText('Confirm password'), { selector: 'input', target: { value: 'secret' } })
}

test('should render a register form', () => {
  const { container } = render(<RegisterForm />)
  expect(container.firstChild).toMatchSnapshot()
})

describe('Inputs', () => {
  test('should handle onChange', () => {
    const { getByLabelText, getByDisplayValue, getAllByDisplayValue } = render(<RegisterForm />)
    fillInputs(getByLabelText)
    const emailInput = getByDisplayValue('asd@asd.com')
    const passwordInputs = getAllByDisplayValue('secret')

    expect(emailInput.value).toBe('asd@asd.com')
    expect(passwordInputs[0].value).toBe('secret')
    expect(passwordInputs[1].value).toBe('secret')
  })
})

describe('On submit', () => {
  const setup = () => {
    const utils = render(<RegisterForm />)
    const button = utils.getByText('Register')
    return { button, ...utils }
  }

  test('should call right services and navigate to home', async () => {
    const { button, getByLabelText } = setup()
    fillInputs(getByLabelText)
    fireEvent.click(button)
    await waitFor(() => {
      expect(userService.create).toHaveBeenCalledWith({ email: 'asd@asd.com', password: 'secret' })
      expect(authService.login).toHaveBeenCalledWith('email', { email: 'asd@asd.com', password: 'secret' })
    })
  })

  test('should show error if passwords do not match', () => {
    const { button, getByText, getByLabelText } = setup()
    fillInputs(getByLabelText)
    fireEvent.change(getByLabelText('Confirm password'), { selector: 'input', target: { value: 'something else' } })
    fireEvent.click(button)
    expect(getByText('Passwords are not equal')).toBeInTheDocument()
  })
})
