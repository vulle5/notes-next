import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '$shared/button'

const GoogleLogin = ({ clientId }) => {
  const auth2 = useRef(null)

  useEffect(() => {
    window.gapi.load('auth2', () => {
      auth2.current = window.gapi.auth2.init({
        client_id: clientId,
        cookie_policy: 'single_host_origin'
      })
    })
  }, [clientId])

  const signIn = () => {
    if (auth2.current) {
      auth2.current.grantOfflineAccess()
        .then(res => console.log('Returns an object with code', res.code))
        .catch(err => console.log(err))
    }

    // Build Firebase credential with the Google ID token.
    // var credential = firebase.auth.GoogleAuthProvider.credential(id_token);

    // // Sign in with credential from the Google user.
    // firebase.auth().signInWithCredential(credential).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    //   // ...
    // });
  }

  return <Button text="Sign in with Google" onClick={signIn} />
}

GoogleLogin.propTypes = {
  clientId: PropTypes.string.isRequired
}

export default GoogleLogin
