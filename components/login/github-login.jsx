import React from 'react'

import useMediaQuery from 'hooks/useMediaQuery'
import Button from '$shared/button'

const GithubLogin = () => {
  const matches = useMediaQuery('(min-width: 600px)')

  const signIn = () => {
    console.log('This is github sign in')
  }

  return (
    <Button onClick={signIn} variant="outlined" style={{ marginLeft: '0.5rem' }}>
      <img height="20" src="/github-icon.svg" alt="logo" />
      <span style={{ marginLeft: '1rem' }}>{matches ? 'Sign in with Github' : 'Sign in'}</span>
    </Button>
  )
}

export default GithubLogin
