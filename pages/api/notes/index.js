import firestore from 'services/firestore'

export default async (req, res) => {
  let notes = [];

  try {
    const collectionRef = await firestore.collection('notes').get()
    collectionRef.forEach(doc => notes.push({ id: doc.id, ...doc.data() }))
    res.status(200).json(notes)
  } catch (err) {
    res.status(500).json({ message: 'Internal server error 500' })
  }
}
