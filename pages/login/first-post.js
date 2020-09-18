import React, { useEffect } from 'react'

const FirstPost = () => {
  // useEffect(() => {
  //   const channel = new BroadcastChannel('github-auth')
  //   channel.postMessage('my message is this');

  //   return () => channel.close()
  // }, [])

  return (
    <div>
      This should post a message
    </div>
  )
}

export default FirstPost
