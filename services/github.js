import fetch from 'services/fetch'

const authorize = clientId => {
  // eslint-disable-next-line no-restricted-globals
  const { width, height } = screen
  const scope = 'user'
  const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=${scope}`

  return window.open(url, 'mysite', `width=600,height=${height * 0.66},left=${width / 2 - 300},top=${height * 0.1}`)
}

const getAccessToken = (clientId, code) => {
  const url = 'http://localhost:3000/api/auth/github'
  return fetch(url, { method: 'POST', body: { clientId, code } })
}

export default { authorize, getAccessToken }
