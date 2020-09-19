const options = () => {
  if (process.env.NODE_ENV === 'development') {
    return devOptions
  }

  if (process.env.NODE_ENV === 'production') {
    return prodOptions
  }

  return defaultOptions
}

const defaultOptions = {
  fetcher: async (...args) => {
    const res = await fetch(...args)
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }

    return res.json()
  }
}

const devOptions = {
  ...defaultOptions,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
  onError: (error, key) => {
    if (error.status !== 403 && error.status !== 404) {
      // eslint-disable-next-line no-console
      console.error(`An error occurred in useSwr hook with key ${key}`, error)
    } else {
      // eslint-disable-next-line no-console
      console.error(`Unexpected error occurred in useSwr hook with key ${key}`, error)
    }
  }
}

const prodOptions = {
  ...defaultOptions,
  onError: error => {
    if (error.status !== 403 && error.status !== 404) {
      // We can send the error to Sentry,
      // or show a notification UI.
    }
  }
}

export default options
