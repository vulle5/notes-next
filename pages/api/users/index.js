import { auth } from 'services/firebase'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      await create(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const create = async (req, res) => {
  const { email, password, displayName } = req.body

  if (email && password) {
    try {
      const userDoc = await auth().createUser({
        email,
        emailVerified: false,
        password,
        displayName,
        disabled: false
      })
      res.status(201).json({
        uid: userDoc.uid,
        email: userDoc.email,
        displayName: userDoc.displayName
      })
    } catch (error) {
      res.status(400).json(error)
    }
  } else {
    res.status(400).json({ message: 'Email and password are required' })
  }
}
