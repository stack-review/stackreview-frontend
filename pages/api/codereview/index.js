import { sendError } from 'lib/api/error'
import { isReqAuthenticated } from '@/lib/api/auth'

import validate from '@/lib/api/validation'
import schema from '@/lib/api/validation/createReview/schema'

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
    case 'POST': {
       if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }

      const { ok, error } = validate(schema, req.body)

      if (!ok) {
        return sendError(res, 400, error)
      }

      const { code, language, anonymous, author } = req.body

      try {
        const collection = await getReviewCollection()
        const review = await collection.insertOne({
          rid: uuid(),
          code, 
          language, 
          anonymous, 
          author,
          createdAt: Date.now()
        })

        return res.status(200).json(review)

      } catch(err) {
        console.error("Failed to save in db", err);
      }

      return res.status(200).json({ code, language, anonymous })
    }

    case 'GET': {
      if (!isReqAuthenticated(req)) {
        return sendError(res, 401)
      }

      const collection = await getReviewCollection()
      const codereviews = await collection.find({}, { sort: { 'createdAt': -1 } }).toArray()

      return res.status(200).json(codereviews)
    }
    default:
      sendError(res, 405)
  }
}
