import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const useAccessToken = () => {
  const { getAccessTokenSilently } = useAuth0()

  const [refreshIndex, setRefreshIndex] = useState(0)
  const [state, setState] = useState({
    error: null,
    loading: true,
    accessToken: null
  })

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({ 
          audience: `https://${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/api/v2/`,
          scope: "read:current_user",
        })

        setState({
          ...state,
          accessToken,
          error: null,
          loading: false,
        })
      } catch (error) {
        setState({
          ...state,
          error,
          loading: false,
        })
      }
    })()
  }, [refreshIndex])

  return {
    ...state,
    refresh: () => setRefreshIndex(refreshIndex + 1),
  }
}