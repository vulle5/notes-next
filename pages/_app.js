import PropTypes from 'prop-types'
import { SWRConfig } from 'swr'
import { RecoilRoot } from 'recoil'

// Options
import getSWROptions from 'options/useSWR'

import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SWRConfig value={getSWROptions()}>
        <Component {...pageProps} />
      </SWRConfig>
    </RecoilRoot>
  )
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape().isRequired
}

// INFO: Use useEffect when you have to access browser only functionality
// like document object because otherwise it wll throw an error when nextJs
// tries to run the code in nodejs environment
