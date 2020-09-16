import React from 'react'

import Button from '$shared/button'

const GithubLogin = () => {
  const signIn = () => {
    console.log('This is github sign in')
  }

  return (
    <Button onClick={signIn} variant="outlined" style={{ marginLeft: '0.5rem' }}>
      <img height="20" src="/github-icon.svg" alt="logo" />
      <span className="buttonText truncate-text">Sign in</span>
      <style jsx>
        {`
          .buttonText {
            margin-left: 1rem;
          }
          @media (min-width: 600px) {
            .buttonText:after {
              content: " with Github";
            }
          }
        `}
      </style>
    </Button>
  )
}

export default GithubLogin
