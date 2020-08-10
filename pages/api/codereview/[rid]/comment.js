import { sendError } from 'lib/api/error'
import { isReqAuthenticated } from '@/lib/api/auth'

import first from 'lodash/first'
import has from 'lodash/has'

import { getReviewCollection } from '@/lib/db'
import { v4 as uuid } from 'uuid'

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
      const { rid, cid } = req.query
      const collection = await getReviewCollection()
      const codereview = await collection.findOne({ 
        rid
      })

      if (!codereview || !has(codereview, 'comments')) {
        return sendError(res, 404)
      }

      const comment = first(codereview.comments.filter(comment => comment.cid === cid))

      if (!comment) {
        return sendError(res, 404)
      }
      return res.status(200).json(comment)
    }

    case 'POST': {
      if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }

      // TODO : add validation of comment - bypassed for now
      // Implement a createReviewComment Joi-based validation service
      if (false) { 
        return sendError(res, 400, error)
      }

      const { rid } = req.query
      const { comment, contributor } = req.body

      try {
        const collection = await getReviewCollection()

        const filter = { rid }
        const options = { upsert: true };
        const patch = {
          $push: {
            comments: {
              cid: uuid(),
              comment,
              contributor,
              createdAt: Date.now()
            }
          }
        }
        await collection.updateOne(filter, patch, options)

        return res.status(204).json()

      } catch(err) {
        console.error("Failed to save in db", err);
      }
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

      // check current user is author
      return sendError(res, 403)
    }

    default:
      sendError(res, 405)
  }

}