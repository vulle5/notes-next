import { auth } from 'services/firebase'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      await login(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const login = async req => {
  const { token } = req.body

  auth.verifyIdToken(token)
}
