import firebase from 'services/firebase-client'
import fetch from 'services/fetch'

// TODO: Reference /api/auth
const url = 'http://localhost:3000/api/auth'

const login = async (email, password) => {
  let error = null

  // Do not persist auth state on client side
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

  try {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
    const idToken = await user.getIdToken(true)
    await fetch(`${url}/login`, { method: 'POST', body: { idToken } })
    await firebase.auth().signOut()
  } catch (err) {
    error = err
  }

  return !error
}

const logout = async () => {
  let error = null

  fetch(`${url}/logout`, { method: 'POST' })
    .catch(err => {
      // TODO: Show error
      error = err
    })

  return !error
}

export default { login, logout }
