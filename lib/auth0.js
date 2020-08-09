
/**
 * Retrieve user & token from useAuth0 hook
 * @example
 * 
 * @param {*} user 
 * @param {*} token 
 */
export const getUserMetadata = (user, token) => {
  const userDetailsByIdUrl = `https://${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/api/v2/users/${user.sub}`

  const metadataResponse = await fetch(userDetailsByIdUrl, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  const { user_metadata } = await metadataResponse.json()

  return user_metadata
}