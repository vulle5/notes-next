/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document'
import InlineScript from 'components/shared/inline-script'

// Check if user is logged in. If not go to login page
const UserScript = () => (
  <InlineScript>
    {() => {
      (function (w, d) {
        if (!w.location.pathname.match(/^\/login\/.*|\/login$/) && !d.cookie.split('; ').includes('loggedIn=1')) {
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
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&family=Roboto:ital,wght@0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
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
