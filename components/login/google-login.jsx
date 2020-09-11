import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'
import Button from '$shared/button'

const GoogleLogin = ({ clientId }) => {
  const auth2 = useRef(null)
  const router = useRouter()

  useEffect(() => {
    window?.gapi?.load('auth2', () => {
      auth2.current = window.gapi.auth2.init({
        client_id: clientId,
        cookie_policy: 'single_host_origin'
      })
    })
  }, [clientId])

  const signIn = async () => {
    if (auth2.current) {
      if (!auth2.current.isSignedIn.get()) {
        try {
          await auth2.current.signIn()
        } catch (err) {
          // TODO: Show this error as login failed
        }
      }
      const googleIdToken = auth2.current.currentUser.get().getAuthResponse().id_token
      await authService.login('google', { googleIdToken })
      router.push('/')
    }
  }

  return <Button text="Sign in with Google" onClick={signIn} />
}

GoogleLogin.propTypes = {
  clientId: PropTypes.string.isRequired
}

export default GoogleLogin
