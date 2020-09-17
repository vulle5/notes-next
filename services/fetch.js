const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: {}
}

const fetcher = (url, options = {}) => {
  const updatedOptions = { ...options }

  // Modify options
  updatedOptions.body = options.body && JSON.stringify(options.body)

  return fetch(url, { ...defaultOptions, ...updatedOptions })
}

export default fetcher
