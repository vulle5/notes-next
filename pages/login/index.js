import React from 'react'
import PropTypes from 'prop-types'

import GoogleLogin from 'components/login/google-login'
import LoginForm from 'components/login/login-form'
import Container from '$shared/container'
import Card from '$shared/card'

export async function getStaticProps() {
  return {
    props: {
      googleClientId: process.env.GOOGLE_CLIENT_ID
    }
  }
}

const Login = ({ googleClientId }) => (
  <Container>
    <div className="wrapper">
      <Card containerStyles={cardStyles}>
        <LoginForm />
        <GoogleLogin clientId={googleClientId} />
      </Card>
    </div>
    <style jsx>{`
      .wrapper {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
    </style>
  </Container>
)

const cardStyles = {
  width: 400
}

Login.propTypes = {
  googleClientId: PropTypes.string.isRequired
}

export default Login
