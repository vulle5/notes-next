import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import authService from 'services/api/auth'
import loadScript from 'helpers/loadScript'
import removeScript from 'helpers/removeScript'
import Button from '$shared/button'

const src = 'https://apis.google.com/js/client:platform.js'

const GoogleLogin = ({ clientId }) => {
  const auth2 = useRef(null)
  const router = useRouter()

  useEffect(() => {
    loadScript(document, 'script', 'google-login', src, () => {
      window.gapi.load('auth2', () => {
        auth2.current = window.gapi.auth2.init({
          client_id: clientId,
          cookie_policy: 'single_host_origin'
        })
      })
    })

    return () => removeScript(document, 'google-login')
  }, [clientId])

  const signIn = async () => {
    try {
      // If user is not authenticated through Google sign them in
      !auth2.current.isSignedIn.get() && await auth2.current.signIn()

      const googleIdToken = auth2.current.currentUser.get().getAuthResponse().id_token
      await authService.login('google', { googleIdToken })
      router.push('/')
    } catch (err) {
      // TODO: Show errors some how
    }
  }

  return <Button onClick={signIn}>Sign in with Google</Button>
}

GoogleLogin.propTypes = {
  clientId: PropTypes.string.isRequired
}

export default GoogleLogin
