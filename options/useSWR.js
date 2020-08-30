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
  fetcher: (...args) => fetch(...args).then(res => res.json())
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
