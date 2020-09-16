import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import useMediaQuery from 'hooks/useMediaQuery'
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

const Login = ({ googleClientId }) => {
  const matches = useMediaQuery('(min-width: 600px)')

  return (
    <Container>
      <Head>
        <title>Welcome back</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Card containerStyles={{ width: matches ? 'auto' : 420 }}>
          <LoginForm />
          <div className="oauthButtonWrapper">
            <GoogleLogin clientId={googleClientId} />
            <GithubLogin />
          </div>
        </Card>
      </div>
      <style jsx>{`
        .wrapper {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .oauthButtonWrapper {
          display: flex;
          justify-content: space-evenly;
        }
      `}
      </style>
    </Container>
  )
}

Login.propTypes = {
  googleClientId: PropTypes.string.isRequired
}

export default Login
