import firebase from 'services/firebase-client'
import fetch from 'services/fetch'

// TODO: Reference /api/auth
const url = 'http://localhost:3000/api/auth'

const login = async (email, password) => {
  let error = null

  // Do not persist auth state on client side
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(({ user }) => user.getIdToken(true))
    .then(idToken => fetch(`${url}/login`, { method: 'POST', body: { idToken } }))
    // Logout from client side
    .then(() => firebase.auth().signOut())
    // TODO: Redirect from login to home
    .catch(err => {
      error = err
    })

  return error
}

const logout = async () => {
  let error = null

  fetch(`${url}/logout`, { method: 'POST' })
    .catch(err => {
      error = err
    })

  return error
}

export default { login, logout }
