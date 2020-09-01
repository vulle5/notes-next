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
  fetcher: (...args) => fetch(...args)
    .then(res => {
      if (res.status >= 200 && res.status <= 299) {
        return res.json()
      }
      // If error throw it to let SWR know that an error occurred
      return res.text().then(message => { throw Error(message) })
    })
}

const devOptions = {
  ...defaultOptions,
  revalidateOnFocus: false,
  shouldRetryOnError: false
}

const prodOptions = {
  ...defaultOptions
}

export default options
