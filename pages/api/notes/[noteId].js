import { firestore } from 'firebase-admin'
import { db } from 'app/services/firebase'
import { verifyToken } from 'app/helpers/api/auth'

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
      case 'PATCH':
        await update(req, res)
        break
      default:
        res.status(404).json({ message: '404 Not Found' })
        break
    }
  } catch (error) {
    res.status(403).json(error)
  }
}

const show = async (req, res) => {
  const { query } = req

  try {
    const doc = await db.collection('notes').doc(query.noteId).get()
    if (doc.get('uid') === req.userToken.uid) {
      const { createdAt, updatedAt, ...rest } = doc.data()

      res.status(200).json({
        id: doc.id,
        createdAt: createdAt.toDate(),
        updatedAt: updatedAt.toDate(),
        ...rest
      })
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
      res.status(403).json({ message: 'Access forbidden 403' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}

const update = async (req, res) => {
  const { query, body } = req
  const { Timestamp } = firestore
  const dbQuery = db.collection('notes').doc(query.noteId)

  try {
    const doc = await dbQuery.get()

    if (doc.get('uid') === req.userToken.uid) {
      const newNote = {
        ...(body.title && { title: body.title }),
        ...(body.content && { content: body.content }),
        ...(body.color && { color: body.color }),
        updatedAt: Timestamp.now()
      }
      await dbQuery.update(newNote)
      const updateDoc = await dbQuery.get()
      const { createdAt, updatedAt, ...rest } = updateDoc.data()

      res.status(200).json({
        id: updateDoc.id,
        createdAt: createdAt.toDate(),
        updatedAt: updatedAt.toDate(),
        ...rest
      })
    } else {
      res.status(404).json({ message: 'Note does not exist' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}
