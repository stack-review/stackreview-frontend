import Joi from '@hapi/joi'

import languages from 'config/languages'

export default Joi.object().keys({
  code: Joi.string().max(10000).required(),
  language: Joi.string().valid(...languages).required(),
  anonymous: Joi.bool()
}).unknown(false).required()