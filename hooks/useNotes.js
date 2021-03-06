import useSWR from 'swr'
import { fetcher } from 'options/useSWR'

const useNotes = swrOptions => {
  const { data = [], error, ...rest } = useSWR('/api/notes', fetcher, swrOptions)

  return {
    data,
    isError: error,
    ...rest
  }
}

export default useNotes
