import useSWR from 'swr'

export default endpoint => {
  const { data, error, ...rest } = useSWR(`/api/${endpoint}`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    ...rest
  }
}
