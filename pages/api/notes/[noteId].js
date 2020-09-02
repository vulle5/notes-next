import { db } from 'services/firebase'
import { verifyToken } from 'helpers/api/auth'

export default async (req, res) => {
  try {
    // Before actions
    await verifyToken(req)

    const { method } = req

    switch (method) {
      case 'GET':
        await show(req, res)
        break
      case 'DELETE':
        await destroy(req, res)
        break
      default:
        res.status(404).json({ message: '404 Not Found' })
        break
    }
  } catch (error) {
    res.status(401).json(error)
  }
}

const show = async (req, res) => {
  const { query } = req

  try {
    const doc = await db.collection('notes').doc(query.noteId).get()
    if (doc.get('uid') === req.userToken.uid) {
      const { createdAt, ...rest } = doc.data()
      res.json({ id: doc.id, createdAt: createdAt.toDate(), ...rest })
    } else {
      res.status(404).json({ message: 'Note does not exist' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}

const destroy = async (req, res) => {
  const { query } = req
  const dbQuery = db.collection('notes').doc(query.noteId)

  try {
    const doc = await dbQuery.get()

    if (doc.get('uid') === req.userToken.uid) {
      await dbQuery.delete()
      res.status(204).end()
    } else {
      res.status(401).json({ message: 'Access forbidden 403' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}
