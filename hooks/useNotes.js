import useSWR from 'swr'

const useNotes = () => {
  const { data = [], error, ...rest } = useSWR('/api/notes')

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    ...rest
  }
}

export default useNotes
