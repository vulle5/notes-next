import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/global.css'

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Check if user is not logged in and is not on login page then redirect to login page
    // TODO: Find better place for this, because this causes blinking in pages with static elements
    if (document.cookie.split(';').some(item => !item.includes('loggedIn=1')) && router.pathname !== '/login') {
      router.push('/login')
    }
  }, [])
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

// INFO: Use useEffect when you have to access browser only functionality
// like document object because otherwise it wll throw an error when nextjs
// tries to run the code in nodejs environment
