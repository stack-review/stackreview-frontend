import { sendError } from 'lib/api/error'
import { isReqAuthenticated } from '@/lib/api/auth'


import { getReviewCollection } from '@/lib/db'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb'
    }
  }
}

export default async (req, res) => {
  switch (req.method) {
    case 'GET': {
      // if (!isReqAuthenticated(req)) {
      //   return sendError(res, 401)
      // }
      const { rid } = req.query
      const collection = await getReviewCollection()
      const codereviews = await collection.findOne({ rid })

      return res.status(200).json(codereviews)
    }

    case 'PATCH': {
      if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }
      // TODO
    }

    case 'DELETE': {
      if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }

      // We do not allow code review deletion for now
      return sendError(res, 403)
    }

    default:
      sendError(res, 405)
  }

}