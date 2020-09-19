import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import authService from 'services/api/auth'
import Button from 'components/shared/button'
import Input from 'components/shared/text-input'

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
    <form className="loginForm">
      <div className="heading">
        <h1>Welcome back</h1>
        <p className="secondary-text">Sign in to access notes-next</p>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
      <section>
        <Input
          autoFocus
          autoComplete="email"
          id="email"
          name="email"
          label="Email address"
          onChange={e => setEmail(e.target.value)}
          stretch
          type="email"
          value={email}
        />
      </section>
      <section>
        <Input
          autoComplete="password"
          id="pass"
          name="pass"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          stretch
          type="password"
          value={password}
        />
      </section>
      <div className="forgotLink">
        <Link href="/login"><a href="/login">Forgot your password?</a></Link>
      </div>
      <Button disabled={isSubmitting} type="submit" onClick={onSubmit} stretch>
        Sign in
      </Button>
      <style jsx>{`
        .heading {
          text-align: center;
          margin-bottom: 2rem;
        }
        .forgotLink {
          text-align: right;
          margin-bottom: 2rem;
        }
        .loginForm {
          margin-bottom: 1rem;
        }
      `}
      </style>
    </form>
  )
}

export default LoginForm
