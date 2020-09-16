import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Ssr version of the hook. Returns null on first render
const useMediaQuery = mediaQuery => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const onEvent = ({ matches }) => setValue(matches)
    // Set initial value on the client
    setValue(mediaQueryList.matches)

    mediaQueryList.addEventListener('change', e => onEvent(e))

    return () => mediaQueryList.removeEventListener('change', onEvent)
  }, [mediaQuery])

  return value
}

useMediaQuery.propTypes = {
  mediaQuery: PropTypes.string.isRequired
}

export default useMediaQuery
