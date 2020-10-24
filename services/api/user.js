import fetcher from 'services/fetch'

// TODO: Reference /api/users
const url = 'http://localhost:3000/api/users'

const create = async body => {
  await fetcher(url, { method: 'POST', body })
}

export default { create }
