import React from 'react'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'
import Button from 'components/shared/button'

const LogoutButton = () => {
  const router = useRouter()

  const handleOnClick = () => {
    authService.logout().then(() => router.replace('/login'))
  }

  return (
    <Button
      onClick={handleOnClick}
      style={{ position: 'absolute', top: '0.5rem', right: '1rem' }}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
