/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import InlineScript from '$shared/inline-script'

// Check if user is logged in. If not go to login page
const UserScript = () => (
  <InlineScript>
    {() => {
      (function (w, d) {
        if (w.location.pathname !== '/login' && !d.cookie.split('; ').includes('loggedIn=1')) {
          w.location.href = '/login'
        }
      }(window, document))
    }}
  </InlineScript>
)

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <UserScript />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
