import { verifyToken } from 'helpers/api/auth'

export default async (req, res) => {
  try {
    await verifyToken(req)

    const { method } = req

    switch (method) {
      case 'GET':
        await current(req, res)
        break
      default:
        res.status(404).json({ message: '404 Not Found' })
        break
    }
  } catch (error) {
    res.status(403).json(error)
  }
}

const current = async (req, res) => {
  res.status(200).json(req.userToken)
}
