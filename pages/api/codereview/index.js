import { sendError } from 'lib/api/error'
import { isReqAuthenticated } from 'lib/api/auth'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
}

export default (req, res) => {
  switch (req.method) {
    case 'POST':
      if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }

      const { code, language } = req.body

      res.status(200).json(languages)

    default:
      sendError(res, 405)
  }
}
