import React, { useState } from 'react'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'
import Button from '$shared/button'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const onSubmit = async e => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await authService.login('email', { email, password })
      setError(null)
      router.push('/')
    } catch (err) {
      setError(err.message)
    }
    setIsSubmitting(false)
  }

  // TODO: Use formik for forms
  return (
    <form>
      <p style={{ color: 'red' }}>{error}</p>
      <section>
        <label htmlFor="email">
          Email address:
          <input
            autoFocus
            autoComplete="email"
            id="email"
            name="email"
            onChange={e => setEmail(e.target.value)}
            type="email"
            value={email}
          />
        </label>
      </section>
      <section>
        <label htmlFor="pass">
          Password:
          <input
            autoComplete="password"
            id="pass"
            name="pass"
            onChange={e => setPassword(e.target.value)}
            type="password"
            value={password}
          />
        </label>
      </section>
      <Button
        disabled={isSubmitting}
        text="Sign in"
        type="submit"
        onClick={onSubmit}
      />
    </form>
  )
}

export default LoginForm
