import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

// Ssr version of the hook. Returns null on first render
const useMediaQuery = mediaQuery => {
  const [value, setValue] = useState(null)

  const onMediaQueryChange = useCallback(({ matches }) => {
    setValue(matches)
  }, [])

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    // Set initial value on the client
    setValue(mediaQueryList.matches)

    mediaQueryList.addEventListener('change', onMediaQueryChange)

    return () => mediaQueryList.removeEventListener('change', onMediaQueryChange)
  }, [mediaQuery, onMediaQueryChange])

  return value
}

useMediaQuery.propTypes = {
  mediaQuery: PropTypes.string.isRequired
}

export default useMediaQuery
