import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import GoogleLogin from 'components/login/google-login'
import GithubLogin from 'components/login/github-login'
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
    <Head>
      <title>Welcome back</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="wrapper">
      <Card>
        <LoginForm />
        <GoogleLogin clientId={googleClientId} />
        <GithubLogin />
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

Login.propTypes = {
  googleClientId: PropTypes.string.isRequired
}

export default Login
