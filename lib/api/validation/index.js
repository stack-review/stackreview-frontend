import Joi from '@hapi/joi'
import get from 'lodash/get'
import fromPairs from 'lodash/fromPairs'

const formatError = error => 
  fromPairs(get(error, 'details', []).map(({ message, path }) => [path.join('.'), message]))

export const validate = (schema, payload) => {
  try {
    return {
      ok: true,
      value: Joi.attempt(payload, schema)
    }
  } catch (e) {
    console.log(e) 
    return {
      ok: false,
      error: formatError(e)
    }
  }
}

export default validate