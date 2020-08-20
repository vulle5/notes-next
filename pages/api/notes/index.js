import { firestore } from 'firebase-admin'
import { db } from 'services/firebase'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await index(req, res)
      break
    case 'POST':
      await create(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const index = async (req, res) => {
  const notes = []

  try {
    const collectionRef = await db.collection('notes').orderBy('createdAt', 'desc').get()
    collectionRef.forEach(doc => {
      const { createdAt, ...rest } = doc.data()
      notes.push({ id: doc.id, createdAt: createdAt.toDate(), ...rest })
    })
    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}

const create = async (req, res) => {
  const { body } = req
  const { Timestamp } = firestore

  try {
    if (body) {
      const docRef = await db.collection('notes').add({
        title: body.title ?? '',
        content: body.content ?? '',
        color: body.color ?? '#000000',
        createdAt: Timestamp.now()
      })

      const doc = await docRef.get()
      if (doc.exists) {
        const { createdAt, ...rest } = doc.data()
        res.status(200).json({ id: doc.id, createdAt: createdAt.toDate(), ...rest })
      } else {
        res.status(404).json({ message: '404 Not found' })
      }
    } else {
      res.status(400).json({ message: 'No body with the request' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}
