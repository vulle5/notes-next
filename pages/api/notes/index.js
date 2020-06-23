import firestore from 'services/firestore'

export default (req, res) => {
  res.status(200).json({ firestore })
}
