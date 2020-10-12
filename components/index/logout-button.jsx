import React from 'react'
import { useRouter } from 'next/router'
import { cache, mutate } from 'swr'

import authService from 'services/api/auth'
import Button from 'components/shared/button'

const LogoutButton = () => {
  const router = useRouter()

  const clearCache = () => (
    cache.keys().forEach(key => mutate(key, null, false))
  )

  const handleOnClick = () => {
    clearCache()
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
