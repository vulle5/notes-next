import React from 'react'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'

import Container from '$shared/container'
import Button from '$shared/button'

const login = () => {
  const router = useRouter()

  const onLoginPress = async () => {
    if (await authService.login('severitikkanen@gmail.com', 'salainen')) {
      router.push('/')
    }
  }

  return (
    <Container>
      This is the login page
      <Button text="Login" onClick={onLoginPress} />
    </Container>
  )
}

export default login
