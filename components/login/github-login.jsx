import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import githubService from 'services/github'
import Button from '$shared/button'

const GithubLogin = ({ clientId }) => {
  useEffect(() => {
    const channel = new BroadcastChannel('github-auth')
    channel.onmessage = async ({ data: code }) => {
      const res = await githubService.getAccessToken(clientId, code)
      console.log(res)
    }

    return () => channel.close()
  }, [clientId])

  const signIn = () => githubService.authorize(clientId)

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
GithubLogin.propTypes = {
  clientId: PropTypes.string.isRequired
}

export default GithubLogin
