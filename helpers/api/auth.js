import { auth } from 'firebase-admin'

const validToken = async req => {
  const sessionCookie = req.cookies.session ?? ''
  // Verify the session cookie. In this case an additional check is added to detect
  // if the user's Firebase session was revoked, user deleted/disabled, etc.
  try {
    await auth().verifySessionCookie(sessionCookie, false)
    return true
  } catch (error) {
    return false
  }
}

// eslint-disable-next-line import/prefer-default-export
export { validToken }
