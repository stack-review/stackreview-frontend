export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const fetchWithToken = (api, token) => 
  fetcher(api, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
