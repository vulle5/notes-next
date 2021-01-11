import React from 'react'
import { useRouter } from 'next/router'
import { cache, mutate } from 'swr'

import authService from 'app/services/api/auth'
import Button from 'app/components/shared/button'

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
      style={{ position: 'absolute', right: '1rem' }}
    >
      Logout
    </Button>
  )
}

export default LogoutButton
