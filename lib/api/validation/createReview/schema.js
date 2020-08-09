import Joi from '@hapi/joi'

import languages from 'config/languages'

export default Joi.object().keys({
  title: Joi.string()
    .max(300)
    .required(), 
  description: Joi.string()
    .max(1000),
  code: Joi.string()
    .max(10000)
    .required(),
  language: Joi.string()
    .valid(...languages.map(({ value }) => value))
    .required(),
  anonymous: Joi.bool(),

  author: Joi.object().keys({
    uid: Joi.string().required(),
    name: Joi.string().required(),
    picture: Joi.string()
  }).required()
}).unknown(false).required()