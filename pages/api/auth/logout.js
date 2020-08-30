import { auth } from 'firebase-admin'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      await sessionLogout(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const sessionLogout = async (req, res) => {
  const sessionCookie = req.cookies.session ?? ''
  res.setHeader('set-cookie', 'session=; max-age=0')
  res.setHeader('set-cookie', 'loggedIn=; max-age=0')

  try {
    const decodedClaims = await auth().verifySessionCookie(sessionCookie)
    await auth().revokeRefreshTokens(decodedClaims.sub)
  } catch (err) {
    // TODO: Log error
  } finally {
    // TODO: Redirect to login page
  }
}
