import '../styles/globals.css'
import { Auth0Provider,useAuth0 } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  const {  error  } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  

  return (
    <Auth0Provider
    domain='dev-0sy9yqv4.us.auth0.com'
    clientId='QbLg5yvELpx3gNpcBrmtWmRMaz7uAZor'
    redirectUri='http://localhost:3000'
  >
    <Component {...pageProps} /></Auth0Provider>)
}

export default MyApp
