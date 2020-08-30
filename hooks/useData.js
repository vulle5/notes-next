import useSWR from 'swr'

const useData = endpoint => {
  const { data, error, ...rest } = useSWR(`/api/${endpoint}`)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    ...rest
  }
}

export default useData
