import React, { useState } from 'react'
import { useRouter } from 'next/router'

import authService from 'app/services/api/auth'
import userService from 'app/services/api/user'
import Button from 'app/components/shared/button'
import Input from 'app/components/shared/text-input'

const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState(null)
  const router = useRouter()

  const onSubmit = async e => {
    e.preventDefault()
    if (password !== passwordAgain) {
      setError('Passwords are not equal')
      return
    }

    setIsSubmitting(true)
    try {
      await userService.create({ email, password })
      await authService.login('email', { email, password })
      setError(null)
      router.push('/')
    } catch (err) {
      setError(err.message)
      setIsSubmitting(false)
    }
  }

  return (
    <form>
      <div className="heading">
        <h1>Nice to meet you</h1>
        <p className="secondary-text">Register an account to access notes-next</p>
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
          id="newPass"
          name="newPass"
          label="Password"
          onChange={e => setPassword(e.target.value)}
          stretch
          type="password"
          value={password}
        />
      </section>
      <section>
        <Input
          autoComplete="password"
          id="passAgain"
          name="passAgain"
          label="Confirm password"
          onChange={e => setPasswordAgain(e.target.value)}
          stretch
          type="password"
          value={passwordAgain}
        />
      </section>
      <Button disabled={isSubmitting} type="submit" onClick={onSubmit} stretch>
        Register
      </Button>
      <style jsx>{`
        .heading {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}
      </style>
    </form>
  )
}

export default RegisterForm
