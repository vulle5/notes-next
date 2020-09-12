import React from 'react'
import PropTypes from 'prop-types'

import GoogleLogin from 'components/login/google-login'
import LoginForm from 'components/login/login-form'
import Container from '$shared/container'

export async function getStaticProps() {
  return {
    props: {
      googleClientId: process.env.GOOGLE_CLIENT_ID
    }
  }
}

const Login = ({ googleClientId }) => (
  <Container>
    <LoginForm />
    <GoogleLogin clientId={googleClientId} />
  </Container>
)

Login.propTypes = {
  googleClientId: PropTypes.string.isRequired
}

export default Login
