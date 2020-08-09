import '../styles/globals.css'
<<<<<<< HEAD
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'

function MyApp({ Component, pageProps }) {
  const { isLoading, error } = useAuth0()

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Oops... {error.message}</div>
  }

=======
import '.././node_modules/highlight.js/styles/vs2015.css'
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
>>>>>>> 5590c3f85b606b65da42e9e831d9cb0b316bd9b1
  return (
    <Auth0Provider
      domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
      clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
      redirectUri={process.env.NEXT_PUBLIC_AUTH_REDIRECT_ID}
<<<<<<< HEAD
      cacheLocation="localstorage"
      useRefreshTokens="true"
=======
       cacheLocation= 'localstorage'
       useRefreshTokens = 'true'
>>>>>>> 5590c3f85b606b65da42e9e831d9cb0b316bd9b1
    >
      <Component {...pageProps} />
    </Auth0Provider>
  )
}

export default MyApp
