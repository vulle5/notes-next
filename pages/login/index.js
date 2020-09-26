import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { useRouter } from 'next/router'

import GoogleLogin from 'components/login/google-login'
import GithubLogin from 'components/login/github-login'
import LoginForm from 'components/login/login-form'
import RegisterForm from 'components/login/register-form'
import Container from 'components/shared/container'
import Card from 'components/shared/card'

export async function getStaticProps() {
  return {
    props: {
      githubClientId: process.env.GITHUB_CLIENT_ID,
      googleClientId: process.env.GOOGLE_CLIENT_ID
    }
  }
}

const Login = ({ githubClientId, googleClientId }) => {
  const router = useRouter()
  const { register } = router.query

  return (
    <Container>
      <Head>
        <title>{register ? 'Register user' : 'Welcome back'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Card>
          <div className="card-wrapper">
            {register ? <RegisterForm /> : <LoginForm />}
            <div className="oauthButtonWrapper">
              <GoogleLogin clientId={googleClientId} />
              <GithubLogin clientId={githubClientId} />
            </div>
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
        .card-wrapper {
          padding: 1rem;
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
  githubClientId: PropTypes.string.isRequired,
  googleClientId: PropTypes.string.isRequired
}

export default Login
