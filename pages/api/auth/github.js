import fetch from 'services/fetch'

export default async (req, res) => {
  const { method } = req

  switch (method) {
    case 'POST':
      await getAccessToken(req, res)
      break
    default:
      res.status(404).json({ message: '404 Not Found' })
      break
  }
}

const getAccessToken = async (req, res) => {
  const url = 'https://github.com/login/oauth/access_token'
  const { clientId, code } = req.body
  const body = { client_id: clientId, client_secret: process.env.GITHUB_CLIENT_SECRET, code }

  try {
    const accessToken = await fetch(url, { method: 'POST', body })
    res.status(200).json({ response: accessToken })
  } catch (err) {
    res.status(400).json(err)
  }
}
