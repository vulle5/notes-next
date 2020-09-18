import React, { useEffect } from 'react'

const Redirect = () => {
  useEffect(() => {
    const channel = new BroadcastChannel('github-auth')
    const urlParams = new URLSearchParams(window.location.search)

    // Send URL params to anyone listening. Send all params if needed in the future
    channel.postMessage(urlParams.get('code'))
    window.close()

    return () => channel.close()
  }, [])

  return (
    <div>
      This should post a message
    </div>
  )
}

export default Redirect
