import '../styles/globals.css'
import '.././node_modules/highlight.js/styles/vs2015.css'
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH_REDIRECT_ID}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
