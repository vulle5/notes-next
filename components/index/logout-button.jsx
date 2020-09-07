import React from 'react'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'
import Button from '$shared/button'

const LogoutButton = () => {
  const router = useRouter()

  const handleOnClick = () => {
    authService.logout()
      .then(() => router.replace('/login'))
  }

  return <Button text="Logout" onClick={handleOnClick} />
}

export default LogoutButton
