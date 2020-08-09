import { useEffect } from 'react'
import { SWRConfig } from 'swr'
import '../styles/globals.css'
import '.././node_modules/highlight.js/styles/vs2015.css'
import { Auth0Provider } from "@auth0/auth0-react";
import Router from 'next/router'

// https://github.com/zeit/next-plugins/issues/282#issuecomment-432127816
Router.events.on('routeChangeComplete', () => {
  if (process.env.NODE_ENV !== 'production') {
    const els = document.querySelectorAll(
      'link[href*="/_next/static/css/styles.chunk.css"]'
    )

    if (els.length) {
      const timestamp = new Date().valueOf()

      els[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`
    }
  }
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH_REDIRECT_ID}
      audience={`https://${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/api/v2/`}
      scope="read:current_user update:current_user_metadata"
    >
      <SWRConfig 
        value={{
          refreshInterval: 3000,
          fetcher: (...args) => fetch(...args).then(res => res.json())
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Auth0Provider>
  )
}

export default MyApp
