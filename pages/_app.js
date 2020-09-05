import '../styles/global.css'

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}

// INFO: Use useEffect when you have to access browser only functionality
// like document object because otherwise it wll throw an error when nextjs
// tries to run the code in nodejs environment
