import firebase from 'services/firebase-client'

const login = async (email, password) => {
  let error = null

  // TODO: Store user info
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch(err => {
      error = err
    })

  return error
}

const logout = async () => {
  let error = null

  firebase.auth().signOut()
    .catch(err => {
      error = err
    })

  return error
}

export default { login, logout }
