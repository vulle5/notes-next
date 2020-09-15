import React from 'react'

import Button from '$shared/button'

const GithubLogin = () => {
  const signIn = () => {
    console.log('This is github sign in')
  }

  return (
    <Button onClick={signIn} variant="outlined" style={{ marginLeft: '0.5rem' }}>
      <img height="20" src="/github-icon.svg" alt="logo" />
      <span style={{ marginLeft: '1rem' }}>Sign in with Github</span>
    </Button>
  )
}

export default GithubLogin
