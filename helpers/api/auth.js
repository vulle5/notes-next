import { auth } from 'firebase-admin'

const verifyToken = async req => {
  const sessionCookie = req.cookies.session ?? ''
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.
  try {
    // CSRF prevention
    if (!/HEAD|GET|OPTIONS/.test(req.method) && req.headers.origin !== process.env.ALLOWED_ORIGIN) {
      throw Error(`This request is not allowed because origin was ${req.headers.origin}`)
    }

    const decodedToken = await auth().verifySessionCookie(sessionCookie, false)
    req.userToken = decodedToken
  } catch (error) {
    req.userToken = null
    throw error
  }
}

// eslint-disable-next-line import/prefer-default-export
export { verifyToken }
