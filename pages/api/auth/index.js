import { auth } from 'firebase-admin'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      await session(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

// Set session expiration to 1 days.
// TODO: Change to 30 days add to env
const expiresIn = 60 * 60 * 24 * 1 * 1000

const session = async (req, res) => {
  // Get the ID token
  const { idToken } = req.body

  try {
    const sessionCookie = await verifyToken(idToken)
    // TODO: Add to env
    const isSecure = process.env.NODE_ENV === 'production' ? 'Secure' : ''

    res.setHeader('Set-Cookie', `session=${sessionCookie}; maxAge=${expiresIn}; HttpOnly; ${isSecure}`)
    res.json({ message: 'success' })
  } catch (err) {
    res.status(401).json({ message: err.message })
  }
}

// Create the session cookie. This will also verify the ID token in the process.
// The session cookie will have the same claims as the ID token.
// To only allow session cookie setting on recent sign-in, auth_time in ID token
// can be checked to ensure user was recently signed in before creating a session cookie.
// Returns sessionCookie or throws an error
const verifyToken = async idToken => {
  const decodedIdToken = await auth().verifyIdToken(idToken)

  // Only process if the user just signed in in the last 5 minutes.
  if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
    return auth().createSessionCookie(idToken, { expiresIn })
  }

  throw new Error('Token validation failed')
}
