import get from 'lodash/get'

const JWT_BEARER_PATTERN = /bearer ([a-z0-9]+\.[a-z0-9]+\.[a-z0-9]+)/i

export const isReqAuthenticated = req => {
  const authorization = get(req, 'headers.authorization', null)

  return authorization && JWT_BEARER_PATTERN.test(authorization)
}

export const extractToken = req => {
  const authorization = get(req, 'headers.authorization')
  
  if (!authorization) {
    return null
  }

  const match = authorization.match(JWT_BEARER_PATTERN)

  if (!match) {
    return null
  }

  return match[1]
}
