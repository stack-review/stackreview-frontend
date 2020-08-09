import '../styles/globals.css'
import '.././node_modules/highlight.js/styles/vs2015.css'


import { Auth0Provider,useAuth0 } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  const { isLoading, error } = useAuth0();
  
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  
  return (
    <Auth0Provider
    domain={process.env.NEXT_PUBLIC_AUTH_DOMAIN}
    clientId={process.env.NEXT_PUBLIC_AUTH_CLIENT_ID}
    redirectUri='https://stackreview.vercel.app/'
  >
    <Component {...pageProps} /></Auth0Provider>)
}

export default MyApp
