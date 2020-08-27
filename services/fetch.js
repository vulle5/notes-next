const fetcher = (url, options) => {
  const updatedOptions = { ...options }

  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options.body)
  }

  return fetch(url, { ...defaultOptions, ...updatedOptions })
}

export default fetcher
