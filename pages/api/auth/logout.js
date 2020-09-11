import { auth } from 'services/firebase'

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
  res.setHeader(
    'Set-Cookie',
    [
      'session=; path=/; Max-Age=0;',
      'loggedIn=; path=/; Max-Age=0;'
    ]
  )

  try {
    const decodedClaims = await auth().verifySessionCookie(sessionCookie)
    await auth().revokeRefreshTokens(decodedClaims.sub)
    res.status(200).end()
  } catch (err) {
    res.status(403).json({ message: err.message })
  }
}
