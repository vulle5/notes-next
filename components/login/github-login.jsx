import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'
import Button from 'components/shared/button'

const GithubLogin = ({ clientId }) => {
  const router = useRouter()

  useEffect(() => {
    const channel = new BroadcastChannel('github-auth')
    channel.onmessage = async ({ data: code }) => {
      try {
        await authService.login('github', { clientId, code })
        router.push('/')
      } catch (err) {
        // TODO: Show errors some how (ALSO IN GOOGLE)
      }
    }

    return () => channel.close()
  }, [clientId, router])

  const authorize = () => {
    // eslint-disable-next-line no-restricted-globals
    const { width, height } = screen
    const scope = 'user'
    const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`
    const target = 'mysite'
    const features = `width=600,height=${height * 0.66},left=${width / 2 - 300},top=${height * 0.1}`

    return window.open(url, target, features)
  }

  return (
    <Button onClick={authorize} variant="outlined" style={{ marginLeft: '0.5rem' }}>
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
