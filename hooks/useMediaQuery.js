import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const useMediaQuery = mediaQuery => {
  const [value, setValue] = useState(process.browser && window.matchMedia(mediaQuery).matches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery)
    const onEvent = ({ matches }) => setValue(matches)

    mediaQueryList.addEventListener('change', e => onEvent(e))

    return () => mediaQueryList.removeEventListener('change', onEvent)
  }, [mediaQuery])

  return value
}

useMediaQuery.propTypes = {
  mediaQuery: PropTypes.string.isRequired
}

export default useMediaQuery
