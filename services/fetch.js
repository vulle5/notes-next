const defaultOptions = {
  method: 'GET',
  headers: {
    Connection: 'keep-alive',
    'Content-Type': 'application/json'
  },
  body: '{}'
}

const handleError = async res => {
  const error = await res.json()
  throw error
}

const fetcher = async (url, options = {}) => {
  const newOptions = { ...defaultOptions, ...options }
  if (options.body) newOptions.body = JSON.stringify(options.body)
  if (options.headers) newOptions.headers = { ...defaultOptions.headers, ...options.headers }

  const res = await fetch(url, { ...defaultOptions, ...newOptions })
  if (!res.ok) return handleError(res)

  return res
}

export default fetcher
