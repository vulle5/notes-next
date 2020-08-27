const fetcher = (url, options) => {
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options.body)
  }

  return fetch(url, { ...defaultOptions, ...options })
}

export default fetcher
