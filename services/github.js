import Fetch from 'services/fetch'

const authorize = clientId => {
  // eslint-disable-next-line no-restricted-globals
  const { width, height } = screen
  const scope = 'user'
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`
  const target = 'mysite'
  const features = `width=600,height=${height * 0.66},left=${width / 2 - 300},top=${height * 0.1}`

  return window.open(url, target, features)
}

const getAccessToken = (clientId, code) => {
  const url = 'http://localhost:3000/api/auth/github'
  const options = { method: 'POST', body: { clientId, code } }

  return new Fetch(url, options).json()
}

export default { authorize, getAccessToken }
