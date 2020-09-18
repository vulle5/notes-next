import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import githubService from 'services/github'
import Button from '$shared/button'

const GithubLogin = ({ clientId }) => {
  useEffect(() => {
    const channel = new BroadcastChannel('github-auth')
    channel.addEventListener('message', event => {
      console.log(event)
    })

    return () => channel.close()
  }, [])

  const signIn = async () => {
    try {
      // TODO: Find a way to communicate between tabs
      // Maybe localStorage? It shares between tabs
      // BroadcastChannel https://stackoverflow.com/questions/28230845/communication-between-tabs-or-windows
      const code = githubService.authorize(clientId)
      console.log(code)
    } catch (err) {
      // TODO: Show errors some how
      console.log(err)
    }
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
GithubLogin.propTypes = {
  clientId: PropTypes.string.isRequired
}

export default GithubLogin
