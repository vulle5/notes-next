import firebase from 'services/firebase-client'
import fetch from 'services/fetch'

// TODO: Reference /api/auth
const url = 'http://localhost:3000/api/auth'

const login = async (type, options) => {
  let idToken = null
  // Do not persist auth state on client side
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
  // Select login path by type
  switch (type) {
    case 'email':
      idToken = await handleEmailAndPassword(options)
      break
    case 'google':
      idToken = await handleGoogle(options)
      break
    default:
      throw new Error('Unknown login type expected one of ["email", "google"]')
  }

  if (idToken) {
    await fetch(`${url}/login`, { method: 'POST', body: { idToken } })
  } else {
    throw new Error('Login failed unexpectedly')
  }
  // Sign out local user to prevent token theft
  await firebase.auth().signOut()
}

const logout = async () => {
  fetch(`${url}/logout`, { method: 'POST' })
}

const handleEmailAndPassword = async ({ email, password }) => {
  // Try to login with email and password
  const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
  // Get token for user
  return user.getIdToken(true)
}

const handleGoogle = async ({ googleIdToken }) => {
  // Create firebase credentials with google id token
  const credential = firebase.auth.GoogleAuthProvider.credential(googleIdToken)
  // Try to login to user
  const { user } = await firebase.auth().signInWithCredential(credential)
  // Get token for user
  return user.getIdToken(true)
}

export default { login, logout }
