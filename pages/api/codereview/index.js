import { sendError } from 'lib/api/error'
import { isReqAuthenticated } from '@/lib/api/auth'

import validate from '@/lib/api/validation'
import schema from '@/lib/api/validation/createReview/schema'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
}

export default (req, res) => {
  switch (req.method) {
    case 'POST': {
      console.log(req.headers)
      if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }

      const { ok, error } = validate(schema, req.body)

      if (!ok) {
        return sendError(res, 400, error)
      }

      const { code, language, anonymous } = req.body

      // TODO: implement database saving

      return res.status(200).json({ code, language, anonymous })
    }

    case 'GET': {
      // if (!isReqAuthenticated(req)) {
      //   return sendError(res, 401)
      // }

      // TODO: immplement database fetching 

      return res.status(200).json([
        { code: 'function onLoad(editor) {\n  console.log("i\'ve loaded");\n}', language: 'javascript', anonymous: false },
        { code: 'function foo () {\n  return \"bar\");\n}', language: 'javascript', anonymous: true }
      ])
    }
    default:
      sendError(res, 405)
  }
}
