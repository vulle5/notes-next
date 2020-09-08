import firebase from 'services/firebase-client'
import fetch from 'services/fetch'

// TODO: Reference /api/auth
const url = 'http://localhost:3000/api/auth'

const login = async (email, password) => {
  // Do not persist auth state on client side
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  // Try to login with email and password
  const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
  // Get token for user
  const idToken = await user.getIdToken(true)
  // Post that token to server for validation
  await fetch(`${url}/login`, { method: 'POST', body: { idToken } })
  // Sign out local user to prevent token theft
  await firebase.auth().signOut()
}

const logout = async () => {
  fetch(`${url}/logout`, { method: 'POST' })
}

export default { login, logout }
